import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';
import { Edit3, RefreshCw } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

const SignPDF: React.FC = () => {
    useSEO('Sign PDF', 'Add signature to PDF.');
    const [file, setFile] = useState<File | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const sign = async () => {
        if (!file) return;
        setIsSaving(true);
        try {
            const pdf = await PDFDocument.load(await file.arrayBuffer());
            const bytes = await pdf.save();
            const blob = new Blob([bytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'signed.pdf';
            link.click();
        } catch (e) { console.error(e); } finally { setIsSaving(false); }
    };

    return (
        <ToolLayout title="Sign PDF" description="Sign documents.">
            <div className="space-y-6">
                {!file ? <FileUpload onFileSelect={f => setFile(f[0])} accept=".pdf" /> : (
                    <div className="space-y-6">
                        <div className="h-40 border rounded bg-white flex items-center justify-center text-slate-400">Signature Canvas Placeholder</div>
                        <button onClick={sign} disabled={isSaving} className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                            {isSaving ? <RefreshCw className="animate-spin" /> : <Edit3 size={20} />}
                            Place Signature & Download
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default SignPDF;
