import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import { useSEO } from '../../hooks/useSEO';
import { Crop, Download } from 'lucide-react';
import FileUpload from '../../components/FileUpload';

const SignatureCreator: React.FC = () => {
    useSEO('Signature Creator', 'Create digital signature from handwritten signature for PDF forms and applications.');

    const [image, setImage] = useState<string | null>(null);
    const [processedSignature, setProcessedSignature] = useState<string | null>(null);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [threshold, setThreshold] = useState(128);

    const handleFileSelect = (files: File[]) => {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    };

    const processSignature = () => {
        if (!image) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;

            if (!ctx) return;

            // Draw original image
            ctx.drawImage(img, 0, 0);

            // Get image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Process each pixel
            for (let i = 0; i < data.length; i += 4) {
                // Apply brightness
                let r = data[i] * (brightness / 100);
                let g = data[i + 1] * (brightness / 100);
                let b = data[i + 2] * (brightness / 100);

                // Apply contrast
                const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
                r = factor * (r - 128) + 128;
                g = factor * (g - 128) + 128;
                b = factor * (b - 128) + 128;

                // Convert to grayscale
                const gray = (r + g + b) / 3;

                // Apply threshold for black/white
                const final = gray > threshold ? 255 : 0;

                // Make white parts transparent
                if (final > 200) {
                    data[i + 3] = 0; // Transparent
                } else {
                    data[i] = 0;     // Black
                    data[i + 1] = 0;
                    data[i + 2] = 0;
                    data[i + 3] = 255; // Opaque
                }
            }

            ctx.putImageData(imageData, 0, 0);
            setProcessedSignature(canvas.toDataURL('image/png'));
        };

        img.src = image;
    };

    const downloadSignature = () => {
        if (!processedSignature) return;
        const link = document.createElement('a');
        link.href = processedSignature;
        link.download = 'signature.png';
        link.click();
    };

    return (
        <ToolLayout
            title="Signature Creator"
            description="Convert handwritten signature photo to digital signature with transparent background."
        >
            <div className="space-y-6">
                {!image ? (
                    <FileUpload onFileSelect={handleFileSelect} accept="image/*" />
                ) : (
                    <>
                        <div className="card">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Crop className="text-primary-600" />
                                Adjust Signature
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        Brightness: {brightness}%
                                    </label>
                                    <input
                                        type="range"
                                        min="50"
                                        max="150"
                                        value={brightness}
                                        onChange={(e) => setBrightness(parseInt(e.target.value))}
                                        className="w-full h-3 accent-primary-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        Contrast: {contrast}%
                                    </label>
                                    <input
                                        type="range"
                                        min="50"
                                        max="150"
                                        value={contrast}
                                        onChange={(e) => setContrast(parseInt(e.target.value))}
                                        className="w-full h-3 accent-primary-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-2">
                                        Threshold: {threshold}
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="255"
                                        value={threshold}
                                        onChange={(e) => setThreshold(parseInt(e.target.value))}
                                        className="w-full h-3 accent-primary-600"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        Adjust to remove background and make signature clearer
                                    </p>
                                </div>

                                <button onClick={processSignature} className="w-full btn-primary">
                                    Process Signature
                                </button>

                                <button
                                    onClick={() => {
                                        setImage(null);
                                        setProcessedSignature(null);
                                    }}
                                    className="w-full px-4 py-2 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    Upload Different Image
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="card">
                                <h3 className="font-bold mb-3">Original</h3>
                                <img src={image} alt="Original" className="w-full border-2 border-slate-200 dark:border-slate-700 rounded-lg" />
                            </div>

                            {processedSignature && (
                                <div className="card bg-slate-50 dark:bg-slate-800">
                                    <h3 className="font-bold mb-3">Processed Signature</h3>
                                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-700 mb-4">
                                        <img src={processedSignature} alt="Processed" className="w-full" />
                                    </div>
                                    <button onClick={downloadSignature} className="w-full download-btn">
                                        <Download size={20} />
                                        Download Signature
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="card bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                            <h3 className="font-bold text-lg mb-3">📝 Tips for Best Results:</h3>
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li>• Sign with black pen on white paper</li>
                                <li>• Take photo in good lighting</li>
                                <li>• Keep camera steady (no blur)</li>
                                <li>• Adjust threshold to remove background completely</li>
                                <li>• Download as PNG to preserve transparency</li>
                                <li>• Use in PDF signing tools or applications</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </ToolLayout>
    );
};

export default SignatureCreator;
