import React from 'react';
import { Copy, CheckCircle } from 'lucide-react';

interface EnhancedOutputProps {
  value: string;
}

export function EnhancedOutput({ value }: EnhancedOutputProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Enhanced Prompt
        </h2>
        <button
          onClick={handleCopy}
          disabled={!value}
          className="inline-flex items-center px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {copied ? (
            <>
              <CheckCircle className="w-4 h-4 mr-1.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-1.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="w-full h-[300px] overflow-auto rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm">
        <div className="p-4">
          {value ? (
            <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">{value}</p>
          ) : (
            <p className="text-gray-400 dark:text-gray-500 italic">
              Your enhanced prompt will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}