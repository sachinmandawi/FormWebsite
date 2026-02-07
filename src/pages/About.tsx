import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Mail, Clock } from 'lucide-react';

const About: React.FC = () => {
    useSEO(
        'About Us - FormTools India',
        'Learn about FormTools India, our mission to help Indian students with document preparation for entrance exams like NEET, JEE, UPSC, and more.'
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                About FormTools India
            </h1>

            <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Our Mission</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                    FormTools India is dedicated to simplifying document preparation for millions of Indian students
                    appearing for competitive entrance examinations. We understand the stress and complexity involved
                    in preparing application documents with specific size, format, and quality requirements.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                    Our mission is to provide <strong>100% free, privacy-focused tools</strong> that process everything
                    locally in your browser—ensuring your sensitive documents never leave your device.
                </p>
            </div>

            <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Why FormTools India?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">🔒 Privacy First</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            All processing happens in your browser. No uploads, no servers, no data collection.
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">🇮🇳 Made for India</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Tailored specifically for Indian exam requirements like NTA, UPSC, SSC, and state boards.
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">⚡ Fast & Free</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            No registration, no payment, no watermarks. Just instant results.
                        </p>
                    </div>
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">📱 Works Everywhere</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            Fully responsive design that works on mobile, tablet, and desktop.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">What We Offer</h2>
                <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span><strong>Image Compression</strong> - Reduce file sizes to meet portal upload limits (typically 50-200 KB)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span><strong>Passport Photo Maker</strong> - Create standard Indian passport photos (35×45mm)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span><strong>Format Converter</strong> - Convert between JPG, PNG, and other formats</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span><strong>PDF Tools</strong> - Merge, split, and sign PDF documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-primary-600 mt-1">✓</span>
                        <span><strong>Exam Guides</strong> - Detailed requirements for NEET, JEE, UPSC, and more</span>
                    </li>
                </ul>
            </div>

            <div className="card mb-8 bg-primary-50 dark:bg-primary-900/10 border-primary-200 dark:border-primary-800">
                <h2 className="text-2xl font-bold mb-4 text-primary-700 dark:text-primary-400">Get in Touch</h2>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="text-primary-600" size={24} />
                        <div>
                            <p className="font-bold">Email Us</p>
                            <a href="mailto:contact@formtoolsindia.com" className="text-primary-600 hover:underline">
                                contact@formtoolsindia.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="text-primary-600" size={24} />
                        <div>
                            <p className="font-bold">Response Time</p>
                            <p className="text-slate-600 dark:text-slate-400">We typically respond within 24-48 hours</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <h2 className="text-2xl font-bold mb-4 text-primary-600">Our Story</h2>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                    FormTools India was born out of personal frustration. As students ourselves, we've experienced
                    the hassle of resizing photos at the last minute, compressing files to fit within upload limits,
                    and searching for reliable tools that don't compromise our privacy.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                    We noticed that most existing tools either charged money, added watermarks, required registration,
                    or worse—uploaded your sensitive documents to unknown servers. That's when we decided to build
                    something better.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300">
                    Today, FormTools India helps thousands of students every month prepare their documents with
                    confidence, knowing their privacy is protected and the tools are completely free.
                </p>
            </div>
        </div>
    );
};

export default About;
