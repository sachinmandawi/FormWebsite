import React from 'react';

interface AdSlotProps {
    id: string;
    className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ id, className = "" }) => {
    const isEnabled = import.meta.env.VITE_ENABLE_ADS === 'true';

    if (!isEnabled) {
        return (
            <div className={`my-8 p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-400 dark:text-slate-600 bg-slate-50 dark:bg-slate-900/50 ${className}`}>
                <div className="text-center">
                    <p className="text-sm font-mono">Ad Placeholder: {id}</p>
                    <p className="text-xs mt-1">Sponsorship Slot (Compliant)</p>
                </div>
            </div>
        );
    }

    // To implement AdSense later:
    return (
        <div className={`my-8 overflow-hidden flex justify-center ${className}`}>
            {/* 
        AdSense Code Block for {id}
        <ins className="adsbygoogle" ... />
      */}
            <div className="text-xs text-slate-400 text-center mb-1">Advertisement</div>
            <div id={`ad-${id}`} className="min-h-[90px] w-full max-w-[728px] bg-slate-100 dark:bg-slate-800"></div>
        </div>
    );
};

export default AdSlot;
