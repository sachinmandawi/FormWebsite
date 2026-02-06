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

            <div className="grid sm:grid-cols-2 gap-6">
                {guides.map(guide => (
                    <Link key={guide.id} to={`/guides/${guide.id}`} className="card hover:border-primary-500 transition-all flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{guide.name}</h3>
                            <p className="text-sm text-slate-500">{guide.desc}</p>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-primary-600 font-bold text-sm">
                            Read Guide <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GuidesHub;
