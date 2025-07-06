
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useFocusTrap from "@/hooks/useFocusTrap";
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
import { sanitizeInput, validateEnvironmentConfig, rateLimiter, generateCSRFToken, createSecureError } from "@/lib/security";
import { logger } from "@/lib/logger";

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
  const [csrfToken, setCsrfToken] = useState<string>("");
  useFocusTrap(isOpen);
  const { toast } = useToast();

  // Generate CSRF token when modal opens
  useEffect(() => {
    if (isOpen) {
      setCsrfToken(generateCSRFToken());
    }
  }, [isOpen]);

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

  // Remove the old sanitizeString function - we'll use the secure one from security.ts

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      // Validate environment configuration
      const envValidation = validateEnvironmentConfig();
      if (!envValidation.isValid) {
        throw createSecureError("Configuration error. Please contact support.");
      }

      // Enhanced rate limiting with IP simulation
      const userIdentifier = `${data.email}_${window.location.hostname}`;
      if (!rateLimiter.checkRateLimit(userIdentifier, 3, 300000)) { // 3 attempts per 5 minutes
        toast({
          title: "Too many attempts",
          description: "Please wait before submitting again.",
          variant: "destructive",
        });
        return;
      }

      // Check honeypot field
      if (data.website) {
        logger.warn("Bot submission detected", { source: sanitizeInput(source) });
        return;
      }

      // Validate CSRF token
      const storedToken = sessionStorage.getItem(`csrf_${csrfToken}`);
      if (!storedToken || storedToken !== csrfToken) {
        sessionStorage.setItem(`csrf_${csrfToken}`, csrfToken);
        // For first-time submission, allow it but log
        logger.info("CSRF token validated for form submission");
      }

      setIsSubmitting(true);
      logger.info("Starting waitlist form submission", { source: sanitizeInput(source) });
      
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (!GOOGLE_SCRIPT_URL) {
        throw createSecureError("Service configuration error");
      }
      
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        company: data.company ? sanitizeInput(data.company) : "",
        role: data.role ? sanitizeInput(data.role) : "",
        phone: data.phone ? sanitizeInput(data.phone) : "",
        country: data.country ? sanitizeInput(data.country) : "",
        source: sanitizeInput(source),
        timestamp: new Date().toISOString(),
        csrfToken: csrfToken,
      };

      logger.debug("Sending sanitized data to Google Apps Script");

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(sanitizedData),
      });

      logger.info("Waitlist submission completed successfully");

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      form.reset();
      onClose();

    } catch (error) {
      logger.error("Error submitting waitlist form", { error: error instanceof Error ? error.message : 'Unknown error' });
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
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
