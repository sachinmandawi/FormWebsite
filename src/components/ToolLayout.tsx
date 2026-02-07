import React from 'react';
import { Shield, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdSlot from './AdSlot';

interface ToolLayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
    instructions?: string[];
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ title, description, children, instructions }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary-600 transition-colors mb-10 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
            </Link>

            <div className="tool-header">
                <h1 className="tool-title">{title}</h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">{description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-8">
                    {/* Tool Workspace */}
                    <div className="block pb-6">
                        {children}
                    </div>

                    <div className="py-4">
                        <AdSlot id="tool-bottom" />
                    </div>

                    {/* Privacy Note */}
                    <div className="mt-8 p-6 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 rounded-[2rem] flex items-center gap-5 shadow-sm">
                        <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-950/30 flex items-center justify-center flex-shrink-0">
                            <Shield className="text-green-600" size={24} />
                        </div>
                        <div>
                            <p className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-xs">Privacy & Safety</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Your data never leaves your device. Everything is processed 100% locally in your browser.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Instructions */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="card-grad border-slate-200/60 dark:border-slate-700/50">
                        <h3 className="flex items-center gap-2 font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
                            <Info size={18} className="text-primary-600" /> Guide
                        </h3>
                        {instructions ? (
                            <ul className="space-y-4">
                                {instructions.map((step, idx) => (
                                    <li key={idx} className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="flex-shrink-0 w-6 h-6 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-[10px] font-black text-primary-600">
                                            {idx + 1}
                                        </span>
                                        <span className="leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500 italic">Please upload a file or enter details to get started.</p>
                        )}
                    </div>

                    <AdSlot id="tool-sidebar" className="my-6" />

                    <div className="card bg-primary-900/90 dark:bg-primary-950/80 border-none shadow-2xl overflow-hidden relative group">
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        <h3 className="font-black text-white mb-2 uppercase tracking-tighter text-lg">Need Assistance?</h3>
                        <p className="text-xs text-primary-200 mb-6 leading-relaxed">
                            Our team is compiling specific requirements for 100+ Indian government exams.
                        </p>
                        <Link to="/guides" className="inline-flex items-center gap-2 text-xs font-black text-white bg-primary-600 px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors">
                            View Study Hub <ArrowLeft size={14} className="rotate-180" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolLayout;
