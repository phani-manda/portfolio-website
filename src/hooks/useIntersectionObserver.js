import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {Array} [ref, isIntersecting, entry]
 */
const useIntersectionObserver = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = false,
    } = options;

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [entry, setEntry] = useState(null);
    const targetRef = useRef(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const element = targetRef.current;
        if (!element) return;

        // Skip if already triggered and triggerOnce is true
        if (triggerOnce && hasTriggered.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);
                const isInView = entry.isIntersecting;

                if (triggerOnce) {
                    if (isInView && !hasTriggered.current) {
                        setIsIntersecting(true);
                        hasTriggered.current = true;
                        observer.disconnect();
                    }
                } else {
                    setIsIntersecting(isInView);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [targetRef, isIntersecting, entry];
};

export default useIntersectionObserver;
