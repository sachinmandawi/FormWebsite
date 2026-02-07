import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';
import { RefreshCw, Image as ImageIcon } from 'lucide-react';

const FormatConverter: React.FC<{ from?: string, to?: string }> = ({ from: initialFrom, to: initialTo }) => {
    const [toFormat, setToFormat] = useState(initialTo || 'png');

    const title = initialFrom && initialTo
        ? `${initialFrom.toUpperCase()} to ${initialTo.toUpperCase()} Converter`
        : 'Universal Image Converter';

    useSEO(title, `Convert images between different formats easily (JPG, PNG, WebP).`);

    const [files, setFiles] = useState<{ file: File, id: string }[]>([]);
    const [isConverting, setIsConverting] = useState(false);
    const [results, setResults] = useState<{ id: string, url: string }[]>([]);

    const handleFileSelect = (newFiles: File[]) => {
        // Validation: If 'from' is specified, filter files
        const filtered = initialFrom && initialFrom !== 'any'
            ? newFiles.filter(f => f.name.toLowerCase().endsWith(initialFrom.toLowerCase()) || f.type.includes(initialFrom.toLowerCase()))
            : newFiles;

        setFiles([...files, ...filtered.map(f => ({ file: f, id: Math.random().toString(36).substr(2, 9) }))]);
    };

    const convertFiles = async () => {
        setIsConverting(true);
        const newResults = await Promise.all(files.map(async (f) => {
            return new Promise<{ id: string, url: string }>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0);

                    const mimeType = `image/${toFormat === 'jpg' ? 'jpeg' : toFormat}`;
                    const dataUrl = canvas.toDataURL(mimeType, 0.9);
                    resolve({ id: f.id, url: dataUrl });
                };
                img.src = URL.createObjectURL(f.file);
            });
        }));
        setResults(newResults);
        setIsConverting(false);
    };

    const formats = ['jpg', 'png', 'webp'];

    return (
        <ToolLayout title={title} description={`Convert images to your desired format instantly.`}>
            <div className="space-y-6">
                <div className="card">
                    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-bold mb-2">Convert To</label>
                            <div className="grid grid-cols-3 gap-2">
                                {formats.map(fmt => (
                                    <button
                                        key={fmt}
                                        onClick={() => setToFormat(fmt)}
                                        className={`px-4 py-2 rounded-lg border-2 font-bold transition-all ${toFormat === fmt
                                            ? 'bg-primary-600 text-white border-primary-600'
                                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                                            }`}
                                    >
                                        {fmt.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {files.length === 0 ? (
                        <FileUpload
                            onFileSelect={handleFileSelect}
                            accept={initialFrom && initialFrom !== 'any' ? `.${initialFrom}` : "image/*"}
                            multiple
                        />
                    ) : (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 gap-3">
                                {files.map(f => {
                                    const res = results.find(r => r.id === f.id);
                                    return (
                                        <div key={f.id} className="p-4 border-2 border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                                    <ImageIcon size={20} className="text-slate-400" />
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <span className="text-sm font-bold truncate max-w-[150px] md:max-w-xs">{f.file.name}</span>
                                                    <span className="text-xs text-slate-500 uppercase">{(f.file.size / 1024).toFixed(1)} KB</span>
                                                </div>
                                            </div>
                                            {res ? (
                                                <a
                                                    href={res.url}
                                                    download={`${f.file.name.split('.')[0]}.${toFormat}`}
                                                    className="btn-primary py-2 px-4 text-xs"
                                                >
                                                    Download
                                                </a>
                                            ) : (
                                                <span className="text-xs text-slate-400 italic">Ready</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => { setFiles([]); setResults([]); }}
                                    className="px-6 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    Clear
                                </button>
                                <button
                                    onClick={convertFiles}
                                    disabled={isConverting || files.length === 0}
                                    className="flex-1 btn-primary py-3 flex items-center justify-center gap-2"
                                >
                                    {isConverting ? <RefreshCw className="animate-spin" size={20} /> : null}
                                    {isConverting ? 'Converting...' : `Convert to ${toFormat.toUpperCase()}`}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="card bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-lg mb-3">💡 Why Convert?</h3>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                        <li>• **JPG**: Best for photos and smaller file sizes.</li>
                        <li>• **PNG**: Best for graphics, icons, and transparent backgrounds.</li>
                        <li>• **WebP**: Modern format with high compression and quality.</li>
                        <li>• **Privacy**: All processing happens safely in your browser.</li>
                    </ul>
                </div>
            </div>
        </ToolLayout>
    );
};
export default FormatConverter;
