
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Please enter a valid email address").max(255, "Email too long"),
  projectType: z.string().max(200, "Project type too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message too long"),
  // Honeypot field
  company: z.string().max(0, "Invalid submission").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
      company: "",
    },
  });

  const sanitizeString = (str: string): string => {
    return str.trim().replace(/[<>\"'&]/g, "");
  };

  const onSubmit = async (data: ContactFormData) => {
    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitTime < 10000) { // 10 seconds for contact form
      toast({
        title: "Please wait",
        description: "Please wait a moment before submitting again.",
        variant: "destructive",
      });
      return;
    }

    // Check honeypot
    if (data.company) {
      console.log("Bot submission detected");
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    try {
      // For now, just log the sanitized data and show success
      // In production, this would be sent to your backend API
      const sanitizedData = {
        name: sanitizeString(data.name),
        email: sanitizeString(data.email),
        projectType: data.projectType ? sanitizeString(data.projectType) : "",
        message: sanitizeString(data.message),
        timestamp: new Date().toISOString(),
      };

      console.log("Contact form submission:", sanitizedData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      
      form.reset();

    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium mb-2 text-white">Name *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder:text-gray-400"
                  placeholder="Your full name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium mb-2 text-white">Email *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder:text-gray-400"
                  placeholder="your@email.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium mb-2 text-white">AI Project Type</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-white placeholder:text-gray-400"
                  placeholder="Machine Learning, NLP, Computer Vision..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium mb-2 text-white">Project Details *</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-white placeholder:text-gray-400"
                  placeholder="Tell us about your AI project requirements..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? "Sending..." : "Send AI Inquiry"}
          <Send size={18} />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
