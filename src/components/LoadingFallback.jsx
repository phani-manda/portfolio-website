import React from 'react';

const LoadingFallback = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                <p className="text-muted-foreground">Loading...</p>
            </div>
        </div>
    );
};

export default LoadingFallback;
