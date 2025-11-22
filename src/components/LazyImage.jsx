import React from 'react';
import useLazyLoad from '../hooks/useLazyLoad';

/**
 * Lazy loading image component with blur-up placeholder
 */
const LazyImage = ({
    src,
    alt,
    className = '',
    placeholderClassName = '',
    rootMargin = '50px',
    ...props
}) => {
    const { src: imageSrc, isLoading, hasError, ref } = useLazyLoad(src, {
        rootMargin,
    });

    if (hasError) {
        return (
            <div
                ref={ref}
                className={`bg-gray-800/50 flex items-center justify-center ${className}`}
                {...props}
            >
                <span className="text-muted-foreground text-sm">Failed to load image</span>
            </div>
        );
    }

    return (
        <div ref={ref} className="relative overflow-hidden">
            {/* Skeleton/Placeholder */}
            {isLoading && (
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-gray-800/30 via-gray-700/30 to-gray-800/30 animate-pulse ${placeholderClassName}`}
                />
            )}

            {/* Actual Image */}
            <img
                src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
                alt={alt}
                className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                loading="lazy"
                {...props}
            />
        </div>
    );
};

export default LazyImage;
