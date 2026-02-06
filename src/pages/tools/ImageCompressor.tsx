import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import imageCompression from 'browser-image-compression';
import { useSEO } from '../../hooks/useSEO';
import { RefreshCw, Zap } from 'lucide-react';

const ImageCompressor: React.FC = () => {
    useSEO('Image Compressor', 'Reduce image KB size.');
    const [selectedImages, setSelectedImages] = useState<{ file: File, id: string }[]>([]);
    const [isCompressing, setIsCompressing] = useState(false);
    const [results, setResults] = useState<{ id: string, originalSize: number, compressedSize: number, compressedBlob: Blob, compressedUrl: string }[]>([]);
    const [maxSizeMB, setMaxSizeMB] = useState(0.5);

    const handleFileSelect = (files: File[]) => {
        const newImages = files.filter(f => f.type.startsWith('image/')).map(f => ({
            file: f, id: Math.random().toString(36).substr(2, 9)
        }));
        setSelectedImages([...selectedImages, ...newImages]);
    };

    const compressImages = async () => {
        setIsCompressing(true);
        const options = { maxSizeMB, useWebWorker: true };
        try {
            const newResults = await Promise.all(selectedImages.map(async (img) => {
                const compressedBlob = await imageCompression(img.file, options);
                return { id: img.id, originalSize: img.file.size, compressedSize: compressedBlob.size, compressedBlob, compressedUrl: URL.createObjectURL(compressedBlob) };
            }));
            setResults(newResults);
        } catch (e) { console.error(e); } finally { setIsCompressing(false); }
    };

    return (
        <ToolLayout title="Image Compressor" description="Compress images." instructions={["Select images.", "Adjust size.", "Download."]}>
            <div className="space-y-6">
                {selectedImages.length === 0 ? <FileUpload onFileSelect={handleFileSelect} accept="image/*" multiple /> : (
                    <div className="space-y-6">
                        <div className="p-4 border rounded-xl">
                            <label className="text-sm font-medium">Target Max Size: {maxSizeMB} MB</label>
                            <input type="range" min="0.01" max="2" step="0.05" value={maxSizeMB} onChange={(e) => setMaxSizeMB(parseFloat(e.target.value))} className="w-full h-2 rounded-lg accent-primary-600" />
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {selectedImages.map(img => {
                                const result = results.find(r => r.id === img.id);
                                return (
                                    <div key={img.id} className="p-3 border rounded-xl flex items-center justify-between">
                                        <span className="text-sm truncate max-w-xs">{img.file.name}</span>
                                        {result && <span className="text-xs font-bold text-green-600">Done</span>}
                                    </div>
                                );
                            })}
                        </div>
                        <button onClick={compressImages} disabled={isCompressing} className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                            {isCompressing ? <RefreshCw className="animate-spin" /> : <Zap size={20} />}
                            Compress All
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default ImageCompressor;
