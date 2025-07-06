// Secure logging utility that only logs in development and sanitizes data
import DOMPurify from 'dompurify';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogData {
  [key: string]: any;
}

class SecureLogger {
  private isDevelopment = import.meta.env.DEV;

  private sanitizeValue(value: any): any {
    if (typeof value === 'string') {
      // Remove potential XSS and sensitive patterns
      return DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
        .replace(/password|token|key|secret|auth/gi, '[REDACTED]');
    }
    
    if (typeof value === 'object' && value !== null) {
      const sanitized: any = {};
      for (const [key, val] of Object.entries(value)) {
        // Redact sensitive keys
        if (/password|token|key|secret|auth|email/i.test(key)) {
          sanitized[key] = '[REDACTED]';
        } else {
          sanitized[key] = this.sanitizeValue(val);
        }
      }
      return sanitized;
    }
    
    return value;
  }

  private log(level: LogLevel, message: string, data?: LogData) {
    if (!this.isDevelopment) return;

    const timestamp = new Date().toISOString();
    const sanitizedData = data ? this.sanitizeValue(data) : undefined;
    
    const logEntry = {
      timestamp,
      level,
      message: DOMPurify.sanitize(message, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }),
      ...(sanitizedData && { data: sanitizedData })
    };

    switch (level) {
      case 'error':
        console.error(`[${timestamp}] ERROR:`, logEntry);
        break;
      case 'warn':
        console.warn(`[${timestamp}] WARN:`, logEntry);
        break;
      case 'info':
        console.info(`[${timestamp}] INFO:`, logEntry);
        break;
      case 'debug':
        console.debug(`[${timestamp}] DEBUG:`, logEntry);
        break;
    }
  }

  info(message: string, data?: LogData) {
    this.log('info', message, data);
  }

  warn(message: string, data?: LogData) {
    this.log('warn', message, data);
  }

  error(message: string, data?: LogData) {
    this.log('error', message, data);
  }

  debug(message: string, data?: LogData) {
    this.log('debug', message, data);
  }
}

export const logger = new SecureLogger();