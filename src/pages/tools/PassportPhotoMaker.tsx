import React, { useState, useCallback } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';
import { Download, RefreshCw, RotateCw } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '../../utils/canvasUtils';
import { examPhotoRequirements } from '../../data/examPhotoRequirements';

const PassportPhotoMaker: React.FC = () => {
    useSEO('Passport Photo Maker', 'Create Indian size photos.');
    const [image, setImage] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [selectedTemplateId, setSelectedTemplateId] = useState<string>(examPhotoRequirements[0].id);

    const selectedTemplate = examPhotoRequirements.find(t => t.id === selectedTemplateId) || examPhotoRequirements[0];

    const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleDownload = async () => {
        if (!image || !croppedAreaPixels) return;
        try {
            const croppedImage = await getCroppedImg(image, croppedAreaPixels, rotation);
            if (croppedImage) {
                const link = document.createElement('a');
                link.href = croppedImage;
                link.download = `photo-${selectedTemplateId}.jpg`;
                link.click();
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <ToolLayout title="Passport Photo Maker" description="35x45mm and other sizes.">
            <div className="space-y-6">
                {!image ? <FileUpload onFileSelect={f => setImage(URL.createObjectURL(f[0]))} accept="image/*" /> : (
                    <div className="space-y-6 flex flex-col items-center">
                        <div className="w-full max-w-md">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Exam / Type</label>
                            <select
                                value={selectedTemplateId}
                                onChange={(e) => setSelectedTemplateId(e.target.value)}
                                className="w-full p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500"
                            >
                                {examPhotoRequirements.map(req => (
                                    <option key={req.id} value={req.id}>
                                        {req.label} ({req.width}x{req.height}{req.unit})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-full max-w-md aspect-[35/45] relative bg-slate-100 dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border-4 border-primary-500/20"
                            style={{ aspectRatio: `${selectedTemplate.width}/${selectedTemplate.height}` }}
                        >
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                rotation={rotation}
                                aspect={selectedTemplate.aspectRatio}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                                onRotationChange={setRotation}
                            />
                        </div>

                        <div className="w-full max-w-md space-y-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="flex items-center gap-2"><RotateCw size={14} /> Rotation</span>
                                    <span>{rotation}°</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="360"
                                    value={rotation}
                                    onChange={e => setRotation(Number(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700 accent-primary-600"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 w-full max-w-md">
                            <button onClick={() => setImage(null)} className="btn-secondary flex-1 flex items-center justify-center gap-2">
                                <RefreshCw size={20} /> New Photo
                            </button>
                            <button onClick={handleDownload} className="btn-primary flex-1 flex items-center justify-center gap-2">
                                <Download size={20} /> Download
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default PassportPhotoMaker;
