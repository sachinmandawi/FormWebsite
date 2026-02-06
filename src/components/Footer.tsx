import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-primary-600 rounded flex items-center justify-center text-white text-xs font-bold">
                                F
                            </div>
                            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                                FormTools<span className="text-primary-600">India</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                            Fast, secure, and client-side tools for Indian students.
                            Fill forms better with the right photo and document sizes.
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-xs text-slate-400">
                            Made with <Heart size={12} className="text-red-500 fill-current" /> for Indian Students
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Tools
                        </h3>
                        <ul className="space-y-2">
                            <li><Link to="/tools/image-compressor" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Image Compressor</Link></li>
                            <li><Link to="/tools/passport-photo-maker" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Passport Photo</Link></li>
                            <li><Link to="/tools/image-to-pdf" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Image to PDF</Link></li>
                            <li><Link to="/tools/merge-pdf" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Merge PDF</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Terms of Use</Link></li>
                            <li><Link to="/about" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">About Us</Link></li>
                            <li><a href="mailto:contact@formtoolsindia.com" className="text-sm text-slate-500 hover:text-primary-600 dark:hover:text-primary-400">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        &copy; {currentYear} FormTools India. Not affiliated with any govt authority.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-xs text-slate-400">Client-Side Processing Only</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
