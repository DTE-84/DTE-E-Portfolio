import { useEffect, useRef } from 'react';

/**
 * Traps keyboard focus within a given element (ref).
 * Also handles closing on 'Escape' key press.
 */
export function useTrapFocus<T extends HTMLElement>(ref: React.RefObject<T | null>, active: boolean, onClose?: () => void) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;
    
    const node = ref.current;
    if (!node) return;

    // Save the previously focused element
    previouslyFocused.current = document.activeElement as HTMLElement;

    // Find all focusable children
    const focusableElementsSelector = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(node.querySelectorAll<HTMLElement>(focusableElementsSelector));  

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first focusable element
    firstElement?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      } else if (e.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [ref, active, onClose]);
}
