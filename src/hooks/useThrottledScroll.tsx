import { useEffect, useRef, useCallback } from 'react';

export const useThrottledScroll = (callback: () => void, delay: number = 16) => {
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecRef = useRef<number>(0);

  const throttledCallback = useCallback(() => {
    const now = Date.now();
    
    if (now - lastExecRef.current >= delay) {
      callback();
      lastExecRef.current = now;
    } else {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
      
      throttleRef.current = setTimeout(() => {
        callback();
        lastExecRef.current = Date.now();
      }, delay - (now - lastExecRef.current));
    }
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
    };
  }, []);

  return throttledCallback;
};