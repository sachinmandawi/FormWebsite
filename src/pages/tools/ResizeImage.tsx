import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';

const ResizeImage: React.FC = () => {
    useSEO('Resize Image', 'Change pixel dimensions.');
    const [image, setImage] = useState<File | null>(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const resize = async () => {
        if (!image) return;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const img = new Image();
        img.onload = () => {
            canvas.getContext('2d')?.drawImage(img, 0, 0, width, height);
            const link = document.createElement('a');
            link.href = canvas.toDataURL();
            link.download = 'resized.jpg';
            link.click();
        };
        img.src = URL.createObjectURL(image);
    };

    return (
        <ToolLayout title="Resize Image" description="Resize by PX.">
            {!image ? <FileUpload onFileSelect={f => { setImage(f[0]); setWidth(500); setHeight(500); }} accept="image/*" /> : (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" value={width} onChange={e => setWidth(parseInt(e.target.value))} className="p-3 border rounded" />
                        <input type="number" value={height} onChange={e => setHeight(parseInt(e.target.value))} className="p-3 border rounded" />
                    </div>
                    <button onClick={resize} className="w-full btn-primary py-4">Resize & Download</button>
                </div>
            )}
        </ToolLayout>
    );
};
export default ResizeImage;
