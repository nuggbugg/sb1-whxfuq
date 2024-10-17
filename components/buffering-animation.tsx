import React from 'react';

export const BufferingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-t-accent border-r-accent border-b-transparent border-l-transparent rounded-full animate-spin-slow"></div>
        <div className="absolute inset-4 border-4 border-t-secondary border-r-secondary border-b-transparent border-l-transparent rounded-full animate-spin-slower"></div>
      </div>
    </div>
  );
};