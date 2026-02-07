import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import { useSEO } from '../../hooks/useSEO';
import { Target, CheckCircle, XCircle, Info, Calendar } from 'lucide-react';
import { eligibilityData } from '../../data/eligibilityRules';

const EligibilityChecker: React.FC = () => {
    useSEO('Free Exam Eligibility Checker', 'Instantly check your eligibility for NEET, JEE, UPSC, and State Exams. 100% accurate age and qualification calculator.');

    const [selectedExam, setSelectedExam] = useState('neet');
    const [dob, setDob] = useState('');
    const [category, setCategory] = useState('General');
    const [qualStatus, setQualStatus] = useState('Passed/Appearing');
    const [result, setResult] = useState<{ eligible: boolean, reasons: string[] } | null>(null);

    const checkEligibility = () => {
        if (!dob) return;

        const exam = eligibilityData[selectedExam];
        const birthDate = new Date(dob);
        const cutoffDate = new Date(exam.ageLimit.cutoffDate);

        const diff = cutoffDate.getTime() - birthDate.getTime();
        const age = diff / (1000 * 60 * 60 * 24 * 365.25);

        const reasons: string[] = [];
        let isEligible = true;

        let maxAge = exam.ageLimit.max || Infinity;
        let minAge = exam.ageLimit.min || 0;

        if (exam.categoryRelaxation[category]) {
            if (maxAge !== Infinity) {
                maxAge += exam.categoryRelaxation[category].age || 0;
            }
        }

        if (age < minAge) {
            isEligible = false;
            reasons.push(`Minimum age required is ${minAge}. Your age at cutoff (${exam.ageLimit.cutoffDate}) will be ${age.toFixed(1)}.`);
        }

        if (age > maxAge) {
            isEligible = false;
            reasons.push(`Maximum age allowed for ${category} is ${maxAge}. Your age at cutoff (${exam.ageLimit.cutoffDate}) will be ${age.toFixed(1)}.`);
        }

        if (qualStatus === 'Not Eligible') {
            isEligible = false;
            reasons.push('Minimum educational qualification not met.');
        }

        if (isEligible) {
            reasons.push(`You meet the age criteria (${age.toFixed(1)} years) and basic qualifications for ${exam.name}.`);
        }

        setResult({ eligible: isEligible, reasons });
    };

    const examKeys = Object.keys(eligibilityData);

    return (
        <ToolLayout title="Exam Eligibility Checker" description="Instantly check if you can apply for major Indian exams.">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                    <div className="card shadow-sm border-slate-200 dark:border-slate-800">
                        <label className="block text-sm font-bold mb-3 flex items-center gap-2">
                            <Target size={18} className="text-primary-600" />
                            Select Exam
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {examKeys.map(key => (
                                <button
                                    key={key}
                                    onClick={() => { setSelectedExam(key); setResult(null); }}
                                    className={`p-3 rounded-xl border-2 font-bold transition-all text-xs truncate ${selectedExam === key
                                        ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/30'
                                        : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary-600'
                                        }`}
                                >
                                    {eligibilityData[key].name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="card shadow-sm border-slate-200 dark:border-slate-800 space-y-4">
                        <div>
                            <label className="block text-sm font-bold mb-2 flex items-center gap-2">
                                <Calendar size={18} className="text-primary-600" />
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="w-full p-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-900 focus:border-primary-600 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Category</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 dark:bg-slate-900 focus:border-primary-600 outline-none transition-all"
                            >
                                <option value="General">General / EWS</option>
                                <option value="OBC">OBC (Non-Creamy Layer)</option>
                                <option value="SC">Scheduled Caste (SC)</option>
                                <option value="ST">Scheduled Tribe (ST)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-2">Qualifying Exam Status</label>
                            <div className="flex flex-wrap gap-4">
                                {['Passed/Appearing', 'Not Eligible'].map(status => (
                                    <label key={status} className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="qualStatus"
                                                checked={qualStatus === status}
                                                onChange={() => setQualStatus(status)}
                                                className="peer appearance-none w-5 h-5 border-2 border-slate-300 dark:border-slate-700 rounded-full checked:border-primary-600 transition-all"
                                            />
                                            <div className="absolute w-2.5 h-2.5 bg-primary-600 rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary-600 transition-colors">{status}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={checkEligibility}
                            disabled={!dob}
                            className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 shadow-lg shadow-primary-500/20 active:scale-[0.98] transition-all"
                        >
                            Check My Eligibility
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {result ? (
                        <div className={`card border-2 shadow-xl ${result.eligible ? 'border-green-500 bg-green-50/50 dark:bg-green-900/10' : 'border-red-500 bg-red-50/50 dark:bg-red-900/10'}`}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-2xl ${result.eligible ? 'bg-green-100 dark:bg-green-800/30' : 'bg-red-100 dark:bg-red-800/30'}`}>
                                    {result.eligible ? (
                                        <CheckCircle className="text-green-600" size={32} />
                                    ) : (
                                        <XCircle className="text-red-600" size={32} />
                                    )}
                                </div>
                                <div>
                                    <h2 className={`text-2xl font-black ${result.eligible ? 'text-green-700' : 'text-red-700'}`}>
                                        {result.eligible ? 'Eligible!' : 'Not Eligible'}
                                    </h2>
                                    <p className="text-xs font-bold uppercase tracking-wider opacity-60">
                                        For {eligibilityData[selectedExam].name} 2026
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                {result.reasons.map((reason, i) => (
                                    <div key={i} className={`flex gap-3 text-sm font-semibold ${result.eligible ? 'text-green-800 dark:text-green-400' : 'text-red-800 dark:text-red-400'}`}>
                                        <span className="mt-1 flex-shrink-0">•</span>
                                        <span>{reason}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner">
                                <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                                    <Info size={16} className="text-primary-600" />
                                    Academic Requirements
                                </h3>
                                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2">
                                    {eligibilityData[selectedExam].qualifications.map((q, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-primary-500">✔</span>
                                            {q}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={eligibilityData[selectedExam].officialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block mt-6 p-2 text-center text-xs font-black text-white bg-slate-900 dark:bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
                                >
                                    Official Notification &rarr;
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="card h-full min-h-[300px] flex flex-col items-center justify-center text-center p-12 border-dashed border-2 border-slate-200 dark:border-slate-800">
                            <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mb-4">
                                <Target size={32} className="text-slate-300 dark:text-slate-700" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-400">Eligibility Status</h3>
                            <p className="text-sm text-slate-400 mt-2 max-w-[200px]">Fill in your details to see the calculation results.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Important Note - Full Width for better layout safety */}
            <div className="mt-12 card bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-100 dark:border-blue-900/30">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-800/30 flex items-center justify-center flex-shrink-0">
                        <Info size={24} className="text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-black text-blue-900 dark:text-blue-300 uppercase tracking-widest text-xs mb-1">Important Reminder</h4>
                        <p className="text-sm text-blue-800/80 dark:text-blue-300/80 font-medium leading-relaxed">
                            This calculation is based on official notification dates for 2026. Always confirm eligibility with the official brochure before submitting your application or paying any fees.
                        </p>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
};

export default EligibilityChecker;
