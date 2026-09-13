import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'stacked' | 'symbol' | 'original';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'original',
  showTagline = true,
}) => {
  // Candidate sources for the original logo:
  // 1. /tradorb-logo.png
  // 2. /TradORB Logo.PNG (exact filename uploaded by user)
  // 3. /tradorb-logo.svg (vector fallback)
  const candidates = ['/tradorb-logo.png', '/TradORB Logo.PNG', '/tradorb-logo.svg'];
  const [candidateIdx, setCandidateIdx] = useState(0);

  // Original logo (The exact uploaded TradORB Logo.PNG asset)
  if (variant === 'original' || variant === 'stacked') {
    const stackedSizes = {
      sm: 'h-11 sm:h-13 w-auto',
      md: 'h-14 sm:h-16 w-auto',
      lg: 'h-20 sm:h-24 w-auto',
      xl: 'h-28 sm:h-32 w-auto',
    };

    const currentSrc = candidates[candidateIdx] || '/tradorb-logo.svg';

    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src={currentSrc}
          onError={() => {
            if (candidateIdx < candidates.length - 1) {
              setCandidateIdx((prev) => prev + 1);
            }
          }}
          alt="TradORB — The World Trades Together"
          className={`${stackedSizes[size]} object-contain`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'symbol') {
    const symbolSizes = {
      sm: 'w-7 h-7',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <img
          src="/tradorb-symbol.svg"
          alt="TradORB Symbol"
          className={`${symbolSizes[size]} object-contain`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal Lockup (Orb + TradORB + Tagline)
  const horizontalHeights = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-11 w-auto',
    lg: 'h-13 sm:h-14 w-auto',
    xl: 'h-16 sm:h-18 w-auto',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/tradorb-horizontal.svg"
        alt="TradORB — The World Trades Together"
        className={`${horizontalHeights[size]} object-contain`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
