import React from 'react';

interface LogoProps {
    size?: number;
    showText?: boolean;
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, showText = true, className = '' }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* SVG Logo Icon */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Background gradient circle */}
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff9933" />
                        <stop offset="50%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#138808" />
                    </linearGradient>
                </defs>

                {/* Main rounded square background */}
                <rect
                    x="5"
                    y="5"
                    width="90"
                    height="90"
                    rx="18"
                    fill="url(#logoGradient)"
                />

                {/* Document/Paper icon */}
                <rect
                    x="25"
                    y="20"
                    width="50"
                    height="60"
                    rx="4"
                    fill="white"
                    opacity="0.95"
                />

                {/* Document lines */}
                <line x1="35" y1="32" x2="65" y2="32" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="42" x2="60" y2="42" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="52" x2="65" y2="52" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round" />

                {/* Indian tricolor accent stripe */}
                <rect
                    x="25"
                    y="65"
                    width="50"
                    height="8"
                    rx="2"
                    fill="url(#accentGradient)"
                />

                {/* Tool/Settings icon overlay */}
                <circle cx="70" cy="68" r="12" fill="#ff9933" />
                <path
                    d="M 70 62 L 72 66 L 76 66 L 73 69 L 74 73 L 70 71 L 66 73 L 67 69 L 64 66 L 68 66 Z"
                    fill="white"
                />
            </svg>

            {/* Text */}
            {showText && (
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                    FormTools<span className="text-primary-600">India</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
