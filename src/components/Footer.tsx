import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <Logo size={24} showText={true} />
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
                            FormTools India provides secure, browser-based document preparation utilities for competitive entrance exams. We process your sensitive data strictly on your device—never on our servers.
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-[10px] font-black text-indigo-900/40 dark:text-indigo-400/30 uppercase tracking-[0.2em]">
                            <Shield className="w-3 h-3" /> Absolute Data Privacy
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
                            Utility Tools
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/tools/image-compressor" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Image Compressor</Link></li>
                            <li><Link to="/tools/passport-photo-maker" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Passport Photo</Link></li>
                            <li><Link to="/tools/image-to-pdf" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Image to PDF</Link></li>
                            <li><Link to="/tools/document-scanner" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Doc Scanner</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
                            Exam Center
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/guides" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Preparation Guides</Link></li>
                            <li><Link to="/exam-calendar" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Exam Calendar</Link></li>
                            <li><Link to="/tools/eligibility-checker" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Eligibility Hub</Link></li>
                            <li><Link to="/about" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">About Mission</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
                            Compliance
                        </h3>
                        <ul className="space-y-3">
                            <li><Link to="/privacy-policy" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/disclaimer" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Disclaimer</Link></li>
                            <li><Link to="/cookies" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Cookie Usage</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-medium text-slate-400 text-center md:text-left">
                        &copy; {currentYear} FormTools India. Designed for the Indian Student Community. Not affiliated with NTA, UPSC, or any Govt. Body.
                    </p>
                    <div className="flex gap-6 items-center">
                        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-full">Serverless Processing</span>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                            With <Heart size={10} className="text-red-500 fill-current" /> For Students
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
