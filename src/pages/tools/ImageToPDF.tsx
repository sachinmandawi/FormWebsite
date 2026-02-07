import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { PDFDocument } from 'pdf-lib';
import { useSEO } from '../../hooks/useSEO';
import { Download, RefreshCw } from 'lucide-react';

const ImageToPDF: React.FC = () => {
    useSEO('Image to PDF', 'Convert images to PDF.');
    const [images, setImages] = useState<{ file: File, id: string, preview: string }[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [pageSize] = useState<'A4' | 'Letter'>('A4');

    const handleFileSelect = (files: File[]) => {
        const newImages = files.filter(f => f.type.startsWith('image/')).map(f => ({
            file: f, id: Math.random().toString(36).substr(2, 9), preview: URL.createObjectURL(f)
        }));
        setImages([...images, ...newImages]);
    };

    const generatePDF = async () => {
        setIsGenerating(true);
        try {
            const pdfDoc = await PDFDocument.create();
            for (const imgItem of images) {
                const imageBytes = await imgItem.file.arrayBuffer();
                let image = imgItem.file.type.includes('png') ? await pdfDoc.embedPng(imageBytes) : await pdfDoc.embedJpg(imageBytes);
                const page = pdfDoc.addPage(pageSize === 'A4' ? [595.28, 841.89] : [612, 792]);
                const dims = image.scaleToFit(page.getWidth() - 40, page.getHeight() - 40);
                page.drawImage(image, { x: 20, y: 20, width: dims.width, height: dims.height });
            }
            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'converted.pdf';
            link.click();
        } catch (e) { console.error(e); } finally { setIsGenerating(false); }
    };

    return (
        <ToolLayout title="Image to PDF" description="Create PDF from images.">
            <div className="space-y-6">
                {images.length === 0 ? <FileUpload onFileSelect={handleFileSelect} accept="image/*" multiple /> : (
                    <div className="space-y-6">
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                            {images.map(img => (
                                <div key={img.id} className="relative group aspect-square">
                                    <img src={img.preview} alt="preview" className="w-full h-full object-cover preview-image" />
                                </div>
                            ))}
                        </div>
                        <button onClick={generatePDF} disabled={isGenerating} className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                            {isGenerating ? <RefreshCw className="animate-spin" /> : <Download size={20} />}
                            Generate PDF
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default ImageToPDF;
