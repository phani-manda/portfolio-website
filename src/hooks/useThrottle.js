import { useCallback, useRef } from 'react';

/**
 * Custom hook to throttle a function call
 * @param {Function} callback - Function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Throttled function
 */
const useThrottle = (callback, delay) => {
    const lastRun = useRef(Date.now());
    const timeoutRef = useRef(null);

    return useCallback(
        (...args) => {
            const now = Date.now();
            const timeSinceLastRun = now - lastRun.current;

            if (timeSinceLastRun >= delay) {
                callback(...args);
                lastRun.current = now;
            } else {
                // Clear any pending timeout
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }

                // Set a new timeout to run at the end of the throttle period
                timeoutRef.current = setTimeout(() => {
                    callback(...args);
                    lastRun.current = Date.now();
                    timeoutRef.current = null;
                }, delay - timeSinceLastRun);
            }
        },
        [callback, delay]
    );
};

export default useThrottle;
