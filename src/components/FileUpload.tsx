import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
    onFileSelect: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, accept = "*", multiple = false }) => {
    const [dragActive, setDragActive] = React.useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelect(Array.from(e.dataTransfer.files));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            onFileSelect(Array.from(e.target.files));
        }
    };

    const onButtonClick = () => {
        inputRef.current?.click();
    };

    return (
        <div
            className={`relative w-full h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all ${dragActive
                ? "border-primary-500 bg-primary-50/50 dark:bg-primary-900/10 scale-[1.01]"
                : "border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30"
                }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
        >
            <input
                ref={inputRef}
                type="file"
                multiple={multiple}
                accept={accept}
                onChange={handleChange}
                className="hidden"
            />

            <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg mb-4 text-primary-600">
                <Upload size={32} />
            </div>

            <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Click to upload or drag & drop
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                {accept === "*" ? "Any file supported" : `Accepted: ${accept}`}
            </p>

            <button
                onClick={onButtonClick}
                className="btn-primary"
            >
                Select Files
            </button>
        </div>
    );
};

export default FileUpload;
