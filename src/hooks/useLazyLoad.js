import { useState, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

/**
 * Custom hook for lazy loading images
 * @param {string} src - Image source URL
 * @param {Object} options - Lazy load options
 * @returns {Object} { src: currentSrc, isLoading, hasError, ref }
 */
const useLazyLoad = (src, options = {}) => {
    const { rootMargin = '50px', placeholder = '' } = options;
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const [ref, isIntersecting] = useIntersectionObserver({
        rootMargin,
        threshold: 0,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!isIntersecting || !src) return;

        setIsLoading(true);
        setHasError(false);

        const img = new Image();

        img.onload = () => {
            setImageSrc(src);
            setIsLoading(false);
        };

        img.onerror = () => {
            setHasError(true);
            setIsLoading(false);
        };

        img.src = src;

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [isIntersecting, src]);

    return { src: imageSrc, isLoading, hasError, ref };
};

export default useLazyLoad;
