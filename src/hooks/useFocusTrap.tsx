import { useEffect, useState } from "react";

const useFocusTrap = (isActive: boolean) => {
  const [focusableElements, setFocusableElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const modal = document.querySelector('[role="dialog"]') as HTMLElement;
    if (!modal) return;

    const elements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    const focusableElementsList = Array.from(elements).filter(
      el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
    );
    
    setFocusableElements(focusableElementsList);

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (focusableElementsList.length === 0) return;

      const firstElement = focusableElementsList[0];
      const lastElement = focusableElementsList[focusableElementsList.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Focus first element when modal opens
    if (focusableElementsList.length > 0) {
      focusableElementsList[0].focus();
    }

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isActive, focusableElements]);

  return focusableElements;
};

export default useFocusTrap;