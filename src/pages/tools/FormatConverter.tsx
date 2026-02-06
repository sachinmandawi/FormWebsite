import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import FileUpload from '../../components/FileUpload';
import { useSEO } from '../../hooks/useSEO';
import { RefreshCw, Image as ImageIcon } from 'lucide-react';

const FormatConverter: React.FC<{ from: string, to: string }> = ({ from, to }) => {
    const title = `${from.toUpperCase()} to ${to.toUpperCase()} Converter`;
    useSEO(title, `Convert ${from.toUpperCase()} images to ${to.toUpperCase()} format easily.`);

    const [files, setFiles] = useState<{ file: File, id: string }[]>([]);
    const [isConverting, setIsConverting] = useState(false);
    const [results, setResults] = useState<{ id: string, url: string }[]>([]);

    const handleFileSelect = (newFiles: File[]) => {
        const valid = newFiles.filter(f => f.name.toLowerCase().endsWith(from.toLowerCase()) || f.type.includes(from.toLowerCase()));
        setFiles([...files, ...valid.map(f => ({ file: f, id: Math.random().toString(36).substr(2, 9) }))]);
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
                    const dataUrl = canvas.toDataURL(`image/${to === 'jpg' ? 'jpeg' : to}`);
                    resolve({ id: f.id, url: dataUrl });
                };
                img.src = URL.createObjectURL(f.file);
            });
        }));
        setResults(newResults);
        setIsConverting(false);
    };

    return (
        <ToolLayout title={title} description={`Convert ${from.toUpperCase()} to ${to.toUpperCase()}.`}>
            <div className="space-y-6">
                {files.length === 0 ? (
                    <FileUpload onFileSelect={handleFileSelect} accept={`.${from}`} multiple />
                ) : (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-3">
                            {files.map(f => {
                                const res = results.find(r => r.id === f.id);
                                return (
                                    <div key={f.id} className="p-3 border rounded-xl flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <ImageIcon className="text-slate-400" />
                                            <span className="text-sm font-medium truncate max-w-xs">{f.file.name}</span>
                                        </div>
                                        {res && <a href={res.url} download={`${f.file.name.split('.')[0]}.${to}`} className="text-xs font-bold text-primary-600">Download</a>}
                                    </div>
                                );
                            })}
                        </div>
                        <button onClick={convertFiles} disabled={isConverting} className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                            {isConverting ? <RefreshCw className="animate-spin" /> : null}
                            Convert All
                        </button>
                    </div>
                )}
            </div>
        </ToolLayout>
    );
};
export default FormatConverter;
