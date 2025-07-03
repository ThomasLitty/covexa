import { useEffect } from "react";

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Core Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metrics: PerformanceMetrics = {};
        
        // Largest Contentful Paint
        if (entry.entryType === 'largest-contentful-paint') {
          metrics.lcp = entry.startTime;
        }
        
        // First Input Delay
        if (entry.entryType === 'first-input') {
          metrics.fid = (entry as any).processingStart - entry.startTime;
        }
        
        // Cumulative Layout Shift
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          metrics.cls = (entry as any).value;
        }

        // Send metrics to analytics (placeholder)
        if (Object.keys(metrics).length > 0) {
          console.log('Core Web Vitals:', metrics);
          // In production, send to analytics service:
          // sendToAnalytics('core-web-vitals', metrics);
        }
      }
    });

    // Observe various performance entries
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.warn('Performance monitoring not fully supported');
    }

    // Lighthouse score simulation (in production, use real Lighthouse CI)
    const measureLighthouseMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
          fcp: navigation.responseStart - navigation.requestStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart
        };
        
        console.log('Performance metrics:', metrics);
        // In production, send to monitoring service
      }
    };

    // Measure after page load
    window.addEventListener('load', measureLighthouseMetrics);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', measureLighthouseMetrics);
    };
  }, []);
};

export default usePerformanceMonitoring;