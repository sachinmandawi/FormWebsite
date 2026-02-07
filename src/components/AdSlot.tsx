import React from 'react';

interface AdSlotProps {
    id: string;
    className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ id, className = "" }) => {
    const isEnabled = import.meta.env.VITE_ENABLE_ADS === 'true';

    if (!isEnabled) {
        return (
            <div className={`my-8 p-10 border-4 border-dotted border-slate-200 dark:border-slate-800 rounded-[2rem] flex items-center justify-center text-slate-400 dark:text-slate-600 bg-slate-50/50 dark:bg-slate-900/30 ${className}`}>
                <div className="text-center">
                    <p className="text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-50">Sponsorship Slot</p>
                    <p className="text-sm font-mono bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">{id}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`my-8 flex flex-col items-center justify-center gap-2 ${className}`}>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Advertisement</div>
            <div className="w-full max-w-[728px] bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-inner">
                <div id={`ad-${id}`} className="min-h-[90px] w-full flex items-center justify-center italic text-slate-300 text-xs">
                    Loading Advertisement...
                </div>
            </div>
        </div>
    );
};

export default AdSlot;
