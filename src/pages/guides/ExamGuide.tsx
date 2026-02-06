import React from 'react';
import { useSEO } from '../../hooks/useSEO';
import { BookOpen, CheckSquare, AlertTriangle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const ExamGuide: React.FC = () => {
    const { examId } = useParams<{ examId: string }>();

    // Data for exam guides
    const guideData: Record<string, any> = {
        'neet': {
            title: 'NEET Form Filling Guide 2026',
            desc: 'Complete document preparation checklist for National Eligibility cum Entrance Test.',
            photo: 'Passport size (10-200KB) and Postcard size (4x6 inch, 10-200KB)',
            signature: 'Required on white background with black ink (4-30KB)',
            docs: ['Class 10 Certificate', 'Category Certificate', 'PwD Certificate'],
            content: `The NEET application process is rigorous and requires high-quality document scans. The National Testing Agency (NTA) often rejects applications due to incorrect photo background or blurry signatures. Ensure you use a white background for photos and a clear black ink signature on plain white paper.`
        },
        'upsc': {
            title: 'UPSC Civil Services Guide',
            desc: 'Expert tips for uploading documents to the UPSC OTR and Application portal.',
            photo: 'Passport size, recently taken (20KB - 300KB)',
            signature: 'Clear scan on white paper (20KB - 300KB)',
            docs: ['Identity Proof (Aadhar/PAN)', 'Educational Certificates'],
            content: `UPSC requires specific JPG formats. One common mistake is uploading photos with spectacles if you don't wear them regularly. The signature must be your official one used in bank accounts or other official IDs.`
        },
        // Add more guides as needed
    };

    const guide = guideData[examId || 'neet'] || guideData['neet'];

    useSEO(guide.title, guide.desc);

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link to="/guides" className="text-primary-600 font-bold mb-8 flex items-center gap-2">
                &larr; All Exam Guides
            </Link>

            <div className="card border-none bg-primary-600 text-white p-8 mb-12 shadow-2xl overflow-hidden relative">
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold mb-4">{guide.title}</h1>
                    <p className="text-primary-100 max-w-2xl">{guide.desc}</p>
                </div>
                <BookOpen className="absolute -bottom-10 -right-10 w-64 h-64 text-primary-500/30 -rotate-12" />
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                        <CheckSquare className="text-green-500" /> Photo & Signature Requirements
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-2">Photograph</h4>
                            <p className="text-sm">{guide.photo}</p>
                            <Link to="/tools/passport-photo-maker" className="text-xs text-primary-600 font-bold mt-3 block">Use Photo Tool &rarr;</Link>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-2">Signature</h4>
                            <p className="text-sm">{guide.signature}</p>
                            <Link to="/tools/image-compressor" className="text-xs text-primary-600 font-bold mt-3 block">Use Compressor &rarr;</Link>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Detailed Instructions</h2>
                    <p className="mb-6">{guide.content}</p>
                    <h3 className="text-xl font-bold mb-4">Step-by-Step Document Preparation</h3>
                    <ol className="space-y-4">
                        <li><strong>Scan your documents:</strong> Use a flatbed scanner or a high-quality mobile scanning app. Ensure no shadows are visible.</li>
                        <li><strong>Check the size:</strong> Right-click on your file and check Properties. If it's over 100KB, use our compressor.</li>
                        <li><strong>Verify Clarity:</strong> Zoom into the signature. If it's pixelated, scan again at a higher DPI.</li>
                        <li><strong>Rename files:</strong> Keep names simple like <code>photo_neet2026.jpg</code>. Avoid special characters.</li>
                    </ol>
                </section>

                <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl flex gap-4">
                    <AlertTriangle className="text-red-600 flex-shrink-0" />
                    <p className="text-xs text-red-800 dark:text-red-400">
                        <strong>Disclaimer:</strong> Requirements can change. Always cross-check with the latest official notification on the official exam website before final submission.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExamGuide;
