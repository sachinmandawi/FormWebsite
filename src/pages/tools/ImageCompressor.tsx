import React, { useState, useEffect } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import imageCompression from 'browser-image-compression';
import { useSEO } from '../../hooks/useSEO';
import { Download, RefreshCw, ArrowRight, CheckCircle, Image as ImageIcon, Settings, ChevronDown, AlertCircle } from 'lucide-react';

interface CompressedResult {
    originalSize: number;
    compressedSize: number;
    compressedBlob: Blob;
    compressedUrl: string;
}

const ImageCompressor: React.FC = () => {
    useSEO('Advanced Image Compressor', 'Compress images to exact size (KB/MB) with high quality.');

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [result, setResult] = useState<CompressedResult | null>(null);
    const [isCompressing, setIsCompressing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Compression Settings
    const [targetSize, setTargetSize] = useState<number>(50);
    const [unit, setUnit] = useState<'KB' | 'MB'>('KB');

    // WebWorker disabled for better compatibility on some VPS/Browser setups
    const [useWebWorker] = useState(false);

    const handleFileSelect = (files: File[]) => {
        if (files.length > 0) {
            const file = files[0];
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setResult(null);
            setError(null);

            // Smart defaults based on file size
            const fileSizeMB = file.size / (1024 * 1024);
            if (fileSizeMB > 1) {
                setUnit('MB');
                setTargetSize(parseFloat((fileSizeMB * 0.5).toFixed(1))); // 50% target
            } else {
                setUnit('KB');
                setTargetSize(Math.min(Math.round(file.size / 1024 / 2), 200));
            }
        }
    };

    // Debounced Compression Effect
    useEffect(() => {
        if (!selectedFile) return;

        const timer = setTimeout(async () => {
            setIsCompressing(true);
            setError(null);
            try {
                // Calculate MB target based on unit
                const maxSizeMB = unit === 'KB' ? targetSize / 1024 : targetSize;

                // Prevent invalid targets
                if (maxSizeMB <= 0) throw new Error("Target size must be greater than 0");

                const options = {
                    maxSizeMB: maxSizeMB,
                    maxWidthOrHeight: 1920,
                    useWebWorker: useWebWorker,
                    initialQuality: 1.0,
                    alwaysKeepResolution: false // Allow resizing to meet target size
                };

                const compressedBlob = await imageCompression(selectedFile, options);
                const compressedUrl = URL.createObjectURL(compressedBlob);

                setResult({
                    originalSize: selectedFile.size,
                    compressedSize: compressedBlob.size,
                    compressedBlob,
                    compressedUrl
                });
            } catch (err: any) {
                console.error("Compression failed:", err);
                setError(err.message || "Failed to compress image. Try a larger target size.");
            } finally {
                setIsCompressing(false);
            }
        }, 600);

        return () => clearTimeout(timer);
    }, [selectedFile, targetSize, unit, useWebWorker]);

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const getSavings = () => {
        if (!result) return 0;
        const saving = ((result.originalSize - result.compressedSize) / result.originalSize) * 100;
        return Math.max(0, parseFloat(saving.toFixed(0)));
    };

    return (
        <ToolLayout
            title="Precision Image Compressor"
            description="Reduce file size to a specific KB or MB target without losing quality."
            instructions={["Upload your image", "Adjust target size using slider or input", "Download optimized file"]}
        >
            <div className="space-y-8 min-h-[600px]">
                {!selectedFile ? (
                    <FileUpload onFileSelect={handleFileSelect} accept="image/*" />
                ) : (
                    <div className="grid lg:grid-cols-12 gap-8 h-full">
                        {/* Left Panel: Settings */}
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="card p-6 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                                    <Settings className="text-primary-600" size={20} />
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Compression Settings</h3>
                                </div>

                                <div className="space-y-6">
                                    {/* Input Group */}
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                                            Target Size
                                        </label>
                                        <div className="flex gap-2">
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    value={targetSize}
                                                    onChange={(e) => setTargetSize(Math.max(0.1, parseFloat(e.target.value) || 0))}
                                                    className="w-full pl-4 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary-500 outline-none font-mono text-lg font-bold text-slate-900 dark:text-white transition-all shadow-sm"
                                                    min="0.1"
                                                    step={unit === 'MB' ? "0.1" : "1"}
                                                    placeholder="Enter size..."
                                                />
                                            </div>
                                            <div className="relative w-28 shrink-0">
                                                <select
                                                    value={unit}
                                                    onChange={(e) => setUnit(e.target.value as 'KB' | 'MB')}
                                                    className="w-full h-full appearance-none px-4 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-slate-300 outline-none focus:border-primary-500 cursor-pointer text-center"
                                                >
                                                    <option value="KB">KB</option>
                                                    <option value="MB">MB</option>
                                                </select>
                                                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Slider for quick adjustment */}
                                        <div className="mt-4 px-1">
                                            <input
                                                type="range"
                                                min={unit === 'KB' ? 10 : 0.1}
                                                max={unit === 'KB' ? 2000 : 5}
                                                step={unit === 'KB' ? 10 : 0.1}
                                                value={targetSize}
                                                onChange={(e) => setTargetSize(parseFloat(e.target.value))}
                                                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                            />
                                            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
                                                <span>Min</span>
                                                <span>Max</span>
                                            </div>
                                        </div>

                                        <p className="text-xs text-slate-500 mt-3">
                                            Adjust the slider or type a precise value.
                                        </p>
                                    </div>

                                    {/* Error Message */}
                                    {error && (
                                        <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-center gap-2">
                                            <AlertCircle size={16} />
                                            {error}
                                        </div>
                                    )}

                                    {/* Size Display */}
                                    <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800 space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Input Size</span>
                                            <span className="font-mono font-bold text-slate-900 dark:text-white">{formatSize(selectedFile.size)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <div className="h-full bg-slate-400 w-full opacity-20"></div>
                                            </div>
                                            <ArrowRight size={14} className="text-slate-400" />
                                            <div className="h-1 flex-1 bg-green-100 dark:bg-green-900/30 rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500 transition-all duration-500" style={{ width: result ? '100%' : '0%' }}></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Output Size</span>
                                            {isCompressing ? (
                                                <span className="flex items-center gap-2 text-primary-600 font-bold">
                                                    <RefreshCw size={12} className="animate-spin" /> Calculating...
                                                </span>
                                            ) : (
                                                <span className="font-mono font-bold text-green-600 dark:text-green-400">
                                                    {result ? formatSize(result.compressedSize) : '...'}
                                                </span>
                                            )}
                                        </div>
                                        {result && (
                                            <div className="flex items-center justify-center gap-2 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 py-2 rounded-lg">
                                                <CheckCircle size={12} /> Reduced by {getSavings()}%
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3 pt-2">
                                        <button
                                            onClick={() => {
                                                if (result) {
                                                    const link = document.createElement('a');
                                                    link.href = result.compressedUrl;
                                                    link.download = `compressed_${selectedFile.name}`;
                                                    link.click();
                                                }
                                            }}
                                            disabled={!result || isCompressing || !!error}
                                            className="w-full btn-primary py-3 flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 disabled:opacity-50 disabled:shadow-none transition-all hover:scale-[1.02]"
                                        >
                                            <Download size={20} />
                                            Download Optimized Image
                                        </button>
                                        <button
                                            onClick={() => setSelectedFile(null)}
                                            className="w-full py-3 text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                                        >
                                            Start Over
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Preview */}
                        <div className="lg:col-span-8 h-full">
                            <div className="card h-full p-1 bg-slate-100 dark:bg-black/30 border-slate-200 dark:border-slate-800 flex flex-col relative overflow-hidden group">
                                <div className="absolute top-4 left-4 z-10 flex gap-2">
                                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-slate-600 dark:text-slate-300">
                                        <ImageIcon size={12} /> Live Preview
                                    </span>
                                </div>

                                <div className="flex-1 flex items-center justify-center p-4 relative">
                                    {isCompressing && (
                                        <div className="absolute inset-0 z-20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm flex items-center justify-center flex-col gap-4 animate-in fade-in duration-300">
                                            <div className="w-16 h-16 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin"></div>
                                            <p className="font-bold text-slate-900 dark:text-white">Optimizing for {targetSize}{unit}...</p>
                                        </div>
                                    )}

                                    {result ? (
                                        <img
                                            src={result.compressedUrl}
                                            alt="Optimized"
                                            className="max-h-[600px] w-auto h-auto object-contain rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"
                                        />
                                    ) : (
                                        <img
                                            src={previewUrl!}
                                            alt="Original"
                                            className="max-h-[600px] w-auto h-auto object-contain rounded-lg shadow-xl opacity-50 blur-sm scale-95 transition-all duration-700"
                                        />
                                    )}
                                </div>
                                <div className="p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur border-t border-slate-200 dark:border-slate-800">
                                    <p className="text-center text-xs text-slate-500 font-medium">
                                        Quality Priority: High • Format: {selectedFile.type.split('/')[1].toUpperCase()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};

export default ImageCompressor;
