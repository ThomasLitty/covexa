
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  headers: {
    // Security headers for development - allow embedding in Lovable preview iframe
    // DO NOT use X-Frame-Options here; it blocks the editor preview.
    'Content-Security-Policy': "frame-ancestors 'self' https://*.lovable.dev https://*.lovable.app",
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Add security headers to built files
        banner: '/* Security headers should be configured at server level */',
      },
    },
  },
}));
