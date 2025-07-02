
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().email("Please enter a valid email address").max(255, "Email too long"),
  company: z.string().max(200, "Company name too long").optional(),
  role: z.string().max(100, "Role too long").optional(),
  phone: z.string().max(20, "Phone number too long").optional(),
  country: z.string().max(100, "Country name too long").optional(),
  // Honeypot field - should remain empty
  website: z.string().max(0, "Invalid submission").optional(),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const WaitlistModal = ({ isOpen, onClose, source = "unknown" }: WaitlistModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const { toast } = useToast();

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      phone: "",
      country: "",
      website: "",
    },
  });

  const sanitizeString = (str: string): string => {
    return str.trim().replace(/[<>\"'&]/g, "");
  };

  const onSubmit = async (data: WaitlistFormData) => {
    // Rate limiting - prevent submissions within 5 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      toast({
        title: "Please wait",
        description: "Please wait a moment before submitting again.",
        variant: "destructive",
      });
      return;
    }

    // Check honeypot field
    if (data.website) {
      console.log("Bot submission detected");
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);
    console.log("Starting form submission...", { ...data, website: undefined });
    
    try {
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 
        "https://script.google.com/macros/s/AKfycbwoFrKItUhY55LawHfkPoUSPWCQegbJWIl8WLeiAx8zfidG-B3QvUnA-JYDlskLUfvCTA/exec";
      
      const sanitizedData = {
        name: sanitizeString(data.name),
        email: sanitizeString(data.email),
        company: data.company ? sanitizeString(data.company) : "",
        role: data.role ? sanitizeString(data.role) : "",
        phone: data.phone ? sanitizeString(data.phone) : "",
        country: data.country ? sanitizeString(data.country) : "",
        source: sanitizeString(source),
        timestamp: new Date().toISOString(),
      };

      console.log("Sending sanitized data to Google Apps Script:", sanitizedData);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      console.log("Response received:", response);

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      form.reset();
      onClose();

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Covexa Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when Covexa launches. We'll send you early access and updates.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Honeypot field - hidden from users */}
            <FormField
              control={form.control}
              name="website"
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
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="john@company.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Corp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Input placeholder="VP of Sales" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="United States" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Join Waitlist
              </Button>
            </div>
          </form>
        </Form>
        
        <p className="text-xs text-gray-500 mt-4">
          By joining our waitlist, you agree to receive updates about Covexa. We respect your privacy and won't spam you.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
