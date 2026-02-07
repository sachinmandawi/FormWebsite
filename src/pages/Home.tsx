import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ImageIcon, FileText, GraduationCap, ShieldCheck, Zap } from 'lucide-react';
import AdSlot from '../components/AdSlot';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    useSEO(
        'FormTools India - Production-Ready Tools for Indian Students',
        'Free tools for Indian students to compress images, convert to PDF, and prepare documents for UPSC, NEET, JEE, and other exams.'
    );

    const categories = [
        { title: 'Image Tools', icon: <ImageIcon className="text-blue-500" />, id: 'image-tools' },
        { title: 'PDF Tools', icon: <FileText className="text-red-500" />, id: 'pdf-tools' },
        { title: 'Exam Resources', icon: <GraduationCap className="text-green-500" />, id: 'exam-guides' },
    ];

    const tools = [
        { name: 'Image Compressor', desc: 'Reduce file size while keeping quality', path: '/tools/image-compressor', category: 'image-tools' },
        { name: 'Passport Photo', desc: 'Create 35x45mm or 2x2 inch photos', path: '/tools/passport-photo-maker', category: 'image-tools' },
        { name: 'Signature Creator', desc: 'Handwritten signature to digital', path: '/tools/signature-creator', category: 'image-tools' },
        { name: 'JPG to PNG', desc: 'Convert JPG images to PNG format', path: '/tools/jpg-to-png', category: 'image-tools' },
        { name: 'PNG to JPG', desc: 'Convert PNG images to JPG format', path: '/tools/png-to-jpg', category: 'image-tools' },
        { name: 'WebP Converter', desc: 'Convert to/from WebP format', path: '/tools/image-converter', category: 'image-tools' },
        { name: 'Image to PDF', desc: 'Merge multiple images into one PDF', path: '/tools/image-to-pdf', category: 'pdf-tools' },
        { name: 'Merge PDF', desc: 'Combine multiple PDF files', path: '/tools/merge-pdf', category: 'pdf-tools' },
        { name: 'Split PDF', desc: 'Extract pages from a PDF', path: '/tools/split-pdf', category: 'pdf-tools' },
        { name: 'Sign PDF', desc: 'Add signature to documents', path: '/tools/sign-pdf', category: 'pdf-tools' },
        { name: 'Document Scanner', desc: 'Scan and enhance certificates', path: '/tools/document-scanner', category: 'image-tools' },
        { name: 'Exam Eligibility Checker', desc: 'Check eligibility for NEET, JEE & UPSC', path: '/tools/eligibility-checker', category: 'exam-guides' },
        { name: 'Exam Calendar 2026', desc: 'Important dates for major Indian exams', path: '/exam-calendar', category: 'exam-guides' },
        { name: 'Exam Guides Hub', desc: 'Preparation guides for NTA, UPSC exams', path: '/guides', category: 'exam-guides' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="text-center py-16 md:py-24">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-indigo-100 dark:border-indigo-800">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Professional Document Suite
                </div>

                <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
                    Professional Toolkit for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-500 dark:from-indigo-300 dark:to-indigo-500">Indian Students</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-[1.6]">
                    Prepare high-quality documents for UPSC, NEET, and JEE with enterprise-grade privacy.
                    No uploads. No servers. <span className="text-indigo-600 font-bold underline decoration-indigo-200 underline-offset-4">100% Client-Side.</span>
                </p>

                <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-indigo-500" /> Secure Processing
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={14} className="text-indigo-500" /> Instant Results
                    </div>
                    <div className="flex items-center gap-2">
                        Official Presets
                    </div>
                </div>
            </section>


            {/* Categories / Tool Grid */}
            {categories.map((cat) => (
                <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                            {cat.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{cat.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {tools.filter(t => t.category === cat.id).map((tool) => (
                            <Link
                                key={tool.path}
                                to={tool.path}
                                className="group relative bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200/60 dark:border-slate-700/50 p-4 hover:shadow-2xl hover:border-primary-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                            >
                                {/* Decorative Gradient Blobs */}
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-primary-500/5 rounded-full blur-xl group-hover:bg-primary-500/10 transition-colors" />

                                <div className="relative z-10 flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:scale-110 group-hover:border-primary-500/30 transition-transform">
                                        {cat.id === 'image-tools' ? <ImageIcon size={14} className="text-blue-500" /> :
                                            cat.id === 'pdf-tools' ? <FileText size={14} className="text-red-500" /> :
                                                <GraduationCap size={14} className="text-green-500" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors truncate">
                                            {tool.name}
                                        </h3>
                                        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 leading-tight">
                                            {tool.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-end items-center relative z-10">
                                    <span className="text-[9px] font-black text-primary-600 uppercase tracking-tighter inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Try Now <span className="text-sm">→</span>
                                    </span>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            <AdSlot id="middle-banner" />

            {/* Content Section for AdSense Compliance & SEO */}
            <section className="card bg-slate-50/50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800/50 my-16">
                <h2 className="text-3xl font-bold mb-6">Mastering Document Preparation for Indian Exams</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                    <p className="mb-4">
                        Filling out admission forms for exams like <strong>UPSC, NEET, JEE, or SSC</strong> can be stressful. Most of these portals have very strict requirements for file sizes (often between 20KB to 100KB) and dimensions. If your document doesn't match these exactly, the portal might reject your application.
                    </p>
                    <p className="mb-4">
                        That's why we built <strong>FormTools India</strong>. Our tools are designed specifically for the Indian student who needs to quickly resize a signature, compress a marksheet PDF, or create a perfect passport-size photo with the correct background.
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Why Use client-side tools?</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li><strong>Privacy:</strong> Your sensitive documents like marksheets or certificates never leave your computer.</li>
                        <li><strong>Speed:</strong> Processing is done by your browser, meaning no waiting for server responses.</li>
                        <li><strong>Reliability:</strong> Works even on slow internet connections once the page is loaded.</li>
                    </ul>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Common Photo Mistakes</h4>
                            <p className="text-sm">Using a selfie, having a dark background, or blurry edges are common reasons for rejection. Always use our Passport Photo maker for the best results.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">PDF Compression Tips</h4>
                            <p className="text-sm">If your scanned PDF is too large, use our PDF tools to compress it. Always check the readability before final submission.</p>
                        </div>
                    </div>
                </div>
            </section>

            <AdSlot id="bottom-banner" />

            {/* FAQ Section */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest text-primary-600">Frequently Asked Questions</h2>
                <div className="grid gap-4 max-w-4xl mx-auto">
                    {[
                        { q: "Is this free to use?", a: "Yes, all our tools are 100% free and will always be." },
                        { q: "Are my files safe?", a: "Absolutely. We use local browser processing. Your files are never uploaded to any server." },
                        { q: "Which exams do you support?", a: "Our tools are optimized for all major Indian exams including UPSC, NEET, JEE, CUET, and Banking exams." },
                    ].map((faq, i) => (
                        <div key={i} className="card p-4">
                            <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
