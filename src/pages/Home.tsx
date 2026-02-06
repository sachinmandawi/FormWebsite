import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Search, Image as ImageIcon, FileText, GraduationCap, ShieldCheck, Zap } from 'lucide-react';
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
        { title: 'Exam Guides', icon: <GraduationCap className="text-green-500" />, id: 'exam-guides' },
    ];

    const tools = [
        { name: 'Image Compressor', desc: 'Reduce file size while keeping quality', path: '/tools/image-compressor', category: 'image-tools' },
        { name: 'Passport Photo', desc: 'Create 35x45mm or 2x2 inch photos', path: '/tools/passport-photo-maker', category: 'image-tools' },
        { name: 'Image to PDF', desc: 'Merge multiple images into one PDF', path: '/tools/image-to-pdf', category: 'pdf-tools' },
        { name: 'Merge PDF', desc: 'Combine multiple PDF files', path: '/tools/merge-pdf', category: 'pdf-tools' },
        { name: 'Split PDF', desc: 'Extract pages from a PDF', path: '/tools/split-pdf', category: 'pdf-tools' },
        { name: 'Sign PDF', desc: 'Add signature to documents', path: '/tools/sign-pdf', category: 'pdf-tools' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="text-center py-12 md:py-20">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                    The Toolbox for <span className="text-primary-600">Indian Students</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10">
                    Prepare your documents for admission, scholarship, and exams in seconds.
                    Everything runs 100% on your device. <span className="text-primary-600 font-semibold">Privacy First.</span>
                </p>

                {/* Search Bar Placeholder */}
                <div className="max-w-xl mx-auto relative mb-12">
                    <input
                        type="text"
                        placeholder="Search for tools (e.g., 'compress', 'passport')..."
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all dark:text-white"
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                        <ShieldCheck size={16} /> Secure
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                        <Zap size={16} /> Fast
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">
                        Indian Form Presets
                    </div>
                </div>
            </section>

            <AdSlot id="top-banner" />

            {/* Categories / Tool Grid */}
            {categories.map((cat) => (
                <div key={cat.id} id={cat.id} className="mb-16 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                            {cat.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{cat.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.filter(t => t.category === cat.id).map((tool) => (
                            <Link
                                key={tool.path}
                                to={tool.path}
                                className="group card hover:border-primary-500/50 hover:bg-primary-50/10 transition-all"
                            >
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                                    {tool.name}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                                    {tool.desc}
                                </p>
                                <div className="mt-4 flex justify-end">
                                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                        Open Tool &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            <AdSlot id="middle-banner" />

            {/* Content Section for AdSense Compliance & SEO */}
            <section className="card bg-slate-50 dark:bg-slate-900/50 border-none my-16">
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
