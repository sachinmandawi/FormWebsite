import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';

const GuidesHub: React.FC = () => {
    useSEO('Exam Document Guides - FormTools India', 'Step-by-step guides for preparing documents for UPSC, NEET, JEE, SSC, and other major exams.');

    const guides = [
        { id: 'neet', name: 'NEET 2026', desc: 'Photos, signature and fingerprint requirements.' },
        { id: 'upsc', name: 'UPSC CSE', desc: 'Civil Services document upload guidelines.' },
        { id: 'ssc', name: 'SSC CGL/CHSL', desc: 'Staff Selection Commission photo specs.' },
        { id: 'jee', name: 'JEE Main', desc: 'Engineering entrance document checklist.' },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Exam Document Guides</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Don't let your application get rejected. Follow our expert guides designed for major Indian competitive exams.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {guides.map(guide => (
                    <Link
                        key={guide.id}
                        to={`/guides/${guide.id}`}
                        className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 p-5 hover:shadow-2xl hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                        {/* Decorative Gradient Blobs */}
                        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-primary-500/5 rounded-full blur-xl group-hover:bg-primary-500/10 transition-colors" />

                        <div className="relative z-10 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center border border-primary-100/50 dark:border-primary-800/50 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                                <GraduationCap size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-black text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                    {guide.name}
                                </h3>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                    {guide.desc}
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end items-center relative z-10">
                            <span className="text-[10px] font-black text-primary-600 uppercase tracking-tighter inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Read Guide <ArrowRight size={14} />
                            </span>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GuidesHub;
