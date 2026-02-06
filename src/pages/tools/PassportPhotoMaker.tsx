import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';
import { Download } from 'lucide-react';

const PassportPhotoMaker: React.FC = () => {
    useSEO('Passport Photo Maker', 'Create Indian size photos.');
    const [image, setImage] = useState<string | null>(null);
    const [zoom, setZoom] = useState(1);

    return (
        <ToolLayout title="Passport Photo Maker" description="35x45mm and other sizes.">
            <div className="space-y-6">
                {!image ? <FileUpload onFileSelect={f => setImage(URL.createObjectURL(f[0]))} accept="image/*" /> : (
                    <div className="space-y-6 flex flex-col items-center">
                        <div className="w-[140px] h-[180px] border-2 border-primary-500 overflow-hidden relative bg-slate-100">
                            <img src={image} style={{ transform: `scale(${zoom})` }} className="max-w-none" alt="preview" />
                        </div>
                        <input type="range" min="0.5" max="3" step="0.1" value={zoom} onChange={e => setZoom(parseFloat(e.target.value))} className="w-full" />
                        <button onClick={() => { }} className="btn-primary flex items-center gap-2 px-8 py-3">
                            <Download size={20} /> Download Photo
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default PassportPhotoMaker;
