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
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors mb-6">
                <ArrowLeft size={16} /> Back to All Tools
            </Link>

            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{title}</h1>
                <p className="text-slate-600 dark:text-slate-400">{description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {/* Tool Workspace */}
                    <div className="card min-h-[400px]">
                        {children}
                    </div>

                    <AdSlot id="tool-bottom" />

                    {/* Privacy Note */}
                    <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-xl flex items-start gap-3">
                        <Shield className="text-green-600 mt-1" size={20} />
                        <div>
                            <p className="text-sm font-semibold text-green-900 dark:text-green-400">Privacy First Policy</p>
                            <p className="text-xs text-green-700 dark:text-green-500">
                                Your files stay on your device. We do not upload your data to any server. Everything is processed locally in your browser.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Instructions */}
                <div className="space-y-6">
                    <div className="card">
                        <h3 className="flex items-center gap-2 font-bold mb-4">
                            <Info size={18} className="text-primary-600" /> How to use?
                        </h3>
                        {instructions ? (
                            <ul className="space-y-3">
                                {instructions.map((step, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                                        <span className="flex-shrink-0 w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500">
                                            {idx + 1}
                                        </span>
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500">Upload your file to get started.</p>
                        )}
                    </div>

                    <AdSlot id="tool-sidebar" className="!my-0" />

                    <div className="card bg-primary-50 dark:bg-primary-900/10 border-primary-100 dark:border-primary-900/30">
                        <h3 className="font-bold text-sm mb-2 text-primary-900 dark:text-primary-400">Need Help?</h3>
                        <p className="text-xs text-primary-700 dark:text-primary-500 mb-3">
                            Check our guide for Indian exams like UPSC, NEET, and more to know the exact requirements.
                        </p>
                        <Link to="/guides" className="text-xs font-bold text-primary-600 hover:underline">
                            View Exam Guides &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolLayout;
