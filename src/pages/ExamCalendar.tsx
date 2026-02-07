import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Calendar, ExternalLink, Bell } from 'lucide-react';
import { examData } from '../data/examDates';

const ExamCalendar: React.FC = () => {
    useSEO('Exam Calendar 2026', 'Complete calendar of major entrance exams in India - NEET, JEE, UPSC, SSC, GATE, CAT with important dates.');

    const [selectedExam, setSelectedExam] = useState('neet');
    const currentExam = examData[selectedExam as keyof typeof examData];

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const getDaysUntil = (dateStr: string) => {
        const today = new Date();
        const targetDate = new Date(dateStr);
        const diff = Math.ceil((targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
        return diff;
    };

    const getStatusColor = (days: number) => {
        if (days < 0) return 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400';
        if (days < 30) return 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400';
        if (days < 90) return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400';
        return 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400';
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                    <Calendar className="text-primary-600" size={48} />
                    Exam Calendar 2026
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                    Never miss important dates for major entrance exams in India
                </p>
            </div>

            {/* Exam Selector */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50 mb-8 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 text-center lg:text-left">Select Examination</h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {Object.keys(examData).map((examId) => {
                        const exam = examData[examId as keyof typeof examData];
                        const isActive = selectedExam === examId;
                        return (
                            <button
                                key={examId}
                                onClick={() => setSelectedExam(examId)}
                                className={`px-5 py-2.5 rounded-full text-xs font-black transition-all duration-300 border-2 ${isActive
                                    ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/25 scale-105'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-700 hover:border-primary-500/50 hover:text-primary-600'
                                    }`}
                            >
                                {exam.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Exam Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="card md:col-span-2">
                    <h2 className="text-2xl font-bold mb-2">{currentExam.fullName}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        Conducted by: <span className="font-bold text-primary-600">{currentExam.authority}</span>
                    </p>

                    <div className="space-y-3">
                        {Object.entries(currentExam.dates).map(([key, date]) => {
                            const daysUntil = getDaysUntil(date);
                            const statusColor = getStatusColor(daysUntil);

                            return (
                                <div key={key} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    <div>
                                        <p className="font-bold capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {formatDate(date)}
                                        </p>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${statusColor}`}>
                                        {daysUntil < 0 ? 'Passed' : `${daysUntil} days`}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="card bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                            <Bell className="text-blue-600" size={20} />
                            Quick Links
                        </h3>
                        <div className="space-y-2">
                            {Object.entries(currentExam.importantLinks).map(([name, url]) => (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-2 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-all"
                                >
                                    <span className="capitalize font-medium">{name}</span>
                                    <ExternalLink size={16} className="text-blue-600" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="card bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                        <h3 className="font-bold mb-3">💡 Pro Tip</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                            Set reminders for application deadlines at least 7 days before to avoid last-minute rush!
                        </p>
                    </div>
                </div>
            </div>

            {/* All Exams Overview */}
            <div className="card">
                <h2 className="text-2xl font-bold mb-6">All Exams at a Glance</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                                <th className="text-left p-3 font-bold">Exam</th>
                                <th className="text-left p-3 font-bold">Application Ends</th>
                                <th className="text-left p-3 font-bold">Exam Date</th>
                                <th className="text-left p-3 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(examData).map(([id, exam]) => {
                                const appEndDays = getDaysUntil(exam.dates.applicationEnd);
                                return (
                                    <tr key={id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <td className="p-3">
                                            <p className="font-bold">{exam.name}</p>
                                            <p className="text-sm text-slate-500">{exam.authority}</p>
                                        </td>
                                        <td className="p-3">{formatDate(exam.dates.applicationEnd)}</td>
                                        <td className="p-3">
                                            {formatDate(
                                                (exam.dates as any).examDate ||
                                                (exam.dates as any).prelimsDate ||
                                                (exam.dates as any).tier1Date
                                            )}
                                        </td>
                                        <td className="p-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(appEndDays)}`}>
                                                {appEndDays < 0 ? 'Closed' : `${appEndDays}d left`}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ExamCalendar;
