import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { PDFDocument } from 'pdf-lib';
import { useSEO } from '../../hooks/useSEO';
import { Download, RefreshCw } from 'lucide-react';

const MergePDF: React.FC = () => {
    useSEO('Merge PDF', 'Combine PDFs.');
    const [pdfs, setPdfs] = useState<{ file: File, id: string }[]>([]);
    const [isMerging, setIsMerging] = useState(false);

    const handleFileSelect = (files: File[]) => {
        const newPdfs = files.filter(f => f.type.includes('pdf')).map(f => ({ file: f, id: Math.random().toString(36).substr(2, 9) }));
        setPdfs([...pdfs, ...newPdfs]);
    };

    const merge = async () => {
        setIsMerging(true);
        try {
            const mergedPdf = await PDFDocument.create();
            for (const p of pdfs) {
                const pdf = await PDFDocument.load(await p.file.arrayBuffer());
                const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                pages.forEach(pg => mergedPdf.addPage(pg));
            }
            const bytes = await mergedPdf.save();
            const blob = new Blob([bytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'merged.pdf';
            link.click();
        } catch (e) { console.error(e); } finally { setIsMerging(false); }
    };

    return (
        <ToolLayout title="Merge PDF" description="Merge PDFs.">
            <div className="space-y-6">
                {pdfs.length === 0 ? <FileUpload onFileSelect={handleFileSelect} accept=".pdf" multiple /> : (
                    <div className="space-y-6">
                        <div className="space-y-2">
                            {pdfs.map(p => (
                                <div key={p.id} className="p-3 border rounded-xl flex items-center justify-between">
                                    <span className="text-sm truncate">{p.file.name}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={merge} disabled={isMerging} className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                            {isMerging ? <RefreshCw className="animate-spin" /> : <Download size={20} />}
                            Merge All
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default MergePDF;
