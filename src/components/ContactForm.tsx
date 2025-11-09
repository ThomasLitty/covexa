
import { useState, useEffect } from "react";
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
import { sanitizeInput, rateLimiter, generateCSRFToken, createSecureError } from "@/lib/security";
import { logger } from "@/lib/logger";

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
  const [csrfToken, setCsrfToken] = useState<string>("");
  const { toast } = useToast();

  // Generate CSRF token on component mount and store it
  useEffect(() => {
    const token = generateCSRFToken();
    setCsrfToken(token);
    sessionStorage.setItem(`csrf_contact_${token}`, token);
  }, []);

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

  // Remove the old sanitizeString function - we'll use the secure one from security.ts

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Enhanced rate limiting with user identification
      const userIdentifier = `contact_${data.email}_${window.location.hostname}`;
      if (!rateLimiter.checkRateLimit(userIdentifier, 2, 600000)) { // 2 attempts per 10 minutes
        toast({
          title: "Too many attempts",
          description: "Please wait before submitting another message.",
          variant: "destructive",
        });
        return;
      }

      // Check honeypot
      if (data.company) {
        logger.warn("Bot submission detected on contact form");
        return;
      }

      // Validate CSRF token
      const storedToken = sessionStorage.getItem(`csrf_contact_${csrfToken}`);
      if (!storedToken || storedToken !== csrfToken) {
        logger.warn("Invalid CSRF token on contact form submission");
        toast({
          title: "Security Error",
          description: "Invalid security token. Please refresh and try again.",
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);
      logger.info("Starting contact form submission");

      // Enhanced sanitization using DOMPurify
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        projectType: data.projectType ? sanitizeInput(data.projectType) : "",
        message: sanitizeInput(data.message),
        timestamp: new Date().toISOString(),
        csrfToken: csrfToken,
      };

      logger.debug("Contact form data sanitized and ready for submission");
      
      // Simulate API call - in production, this would go to your secure backend
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      
      form.reset();
      // Generate new CSRF token after successful submission
      const newToken = generateCSRFToken();
      setCsrfToken(newToken);
      sessionStorage.setItem(`csrf_contact_${newToken}`, newToken);

    } catch (error) {
      logger.error("Error submitting contact form", { error: error instanceof Error ? error.message : 'Unknown error' });
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
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
