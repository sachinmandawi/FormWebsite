import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';
import { RefreshCw, Scissors } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

const SplitPDF: React.FC = () => {
    useSEO('Split PDF', 'Split PDF pages.');
    const [file, setFile] = useState<File | null>(null);
    const [range, setRange] = useState('');
    const [isSplitting, setIsSplitting] = useState(false);

    const split = async () => {
        if (!file || !range) return;
        setIsSplitting(true);
        try {
            const pdf = await PDFDocument.load(await file.arrayBuffer());
            const splitPdf = await PDFDocument.create();
            const pages = range.split(',').map(n => parseInt(n.trim()) - 1);
            const copied = await splitPdf.copyPages(pdf, pages);
            copied.forEach(p => splitPdf.addPage(p));
            const bytes = await splitPdf.save();
            const blob = new Blob([bytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'split.pdf';
            link.click();
        } catch (e) { console.error(e); } finally { setIsSplitting(false); }
    };

    return (
        <ToolLayout title="Split PDF" description="Divide PDF pages.">
            <div className="space-y-6">
                {!file ? <FileUpload onFileSelect={f => setFile(f[0])} accept=".pdf" /> : (
                    <div className="space-y-6">
                        <input type="text" placeholder="e.g. 1, 3, 5" value={range} onChange={e => setRange(e.target.value)} className="w-full p-3 border rounded-xl" />
                        <button onClick={split} disabled={isSplitting} className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                            {isSplitting ? <RefreshCw className="animate-spin" /> : <Scissors size={20} />}
                            Split PDF
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default SplitPDF;
