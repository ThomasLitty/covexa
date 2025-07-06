import DOMPurify from 'dompurify';
import { logger } from './logger';

// Enhanced input sanitization using DOMPurify
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Use DOMPurify to remove all HTML tags and dangerous content
  const cleaned = DOMPurify.sanitize(input.trim(), { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
  
  // Additional sanitization for common injection patterns
  return cleaned
    .replace(/[<>\"'&]/g, '') // Remove dangerous characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .substring(0, 2000); // Limit length
};

// Environment variable validation
export const validateEnvironmentConfig = () => {
  const requiredEnvVars = {
    VITE_GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL
  };

  const missingVars: string[] = [];
  const invalidUrls: string[] = [];

  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value) {
      missingVars.push(key);
      return;
    }

    // Validate Google Apps Script URL format
    if (key === 'VITE_GOOGLE_SCRIPT_URL') {
      const isValidGoogleScript = value.startsWith('https://script.google.com/macros/s/') &&
                                  value.includes('/exec');
      if (!isValidGoogleScript) {
        invalidUrls.push(key);
        logger.warn('Invalid Google Apps Script URL format', { key });
      }
    }
  });

  if (missingVars.length > 0) {
    logger.error('Missing required environment variables', { missingVars });
  }

  if (invalidUrls.length > 0) {
    logger.error('Invalid URL format in environment variables', { invalidUrls });
  }

  return {
    isValid: missingVars.length === 0 && invalidUrls.length === 0,
    missingVars,
    invalidUrls
  };
};

// Rate limiting utility
interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
}

class RateLimiter {
  private attempts = new Map<string, RateLimitEntry>();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Clean up old entries every 5 minutes
    this.cleanupInterval = setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.attempts.entries()) {
        if (now - entry.lastAttempt > 300000) { // 5 minutes
          this.attempts.delete(key);
        }
      }
    }, 300000);
  }

  checkRateLimit(identifier: string, maxAttempts: number, windowMs: number): boolean {
    const now = Date.now();
    const entry = this.attempts.get(identifier);

    if (!entry) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now
      });
      return true;
    }

    // Reset window if enough time has passed
    if (now - entry.firstAttempt > windowMs) {
      this.attempts.set(identifier, {
        count: 1,
        firstAttempt: now,
        lastAttempt: now
      });
      return true;
    }

    // Check if limit exceeded
    if (entry.count >= maxAttempts) {
      logger.warn('Rate limit exceeded', { 
        identifier: sanitizeInput(identifier), 
        attempts: entry.count 
      });
      return false;
    }

    // Update attempt count
    entry.count++;
    entry.lastAttempt = now;
    this.attempts.set(identifier, entry);
    
    return true;
  }

  cleanup() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.attempts.clear();
  }
}

export const rateLimiter = new RateLimiter();

// Generate simple CSRF token for form submissions
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Validate CSRF token (simple implementation)
export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  if (!token || !storedToken || token.length !== 64) return false;
  return token === storedToken;
};

// Secure error handling - never expose sensitive information
export const createSecureError = (message: string, code?: string): Error => {
  const sanitizedMessage = sanitizeInput(message);
  const error = new Error(sanitizedMessage);
  
  // In production, log the full error but return a generic message
  if (!import.meta.env.DEV) {
    logger.error('Application error occurred', { message: sanitizedMessage, code });
    return new Error('An error occurred. Please try again.');
  }
  
  return error;
};