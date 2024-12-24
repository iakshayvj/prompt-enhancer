import React from 'react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnhance: () => void;
  isLoading: boolean;
}

export function PromptInput({ value, onChange }: PromptInputProps) {
  return (
    <div className="w-full space-y-2">
      <label htmlFor="prompt" className="block text-base font-semibold text-gray-900 dark:text-gray-100">
        Your Prompt
      </label>
      <div className="relative">
        <textarea
          id="prompt"
          className="w-full h-[200px] p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Enter your prompt here... (e.g., 'Write a blog post about artificial intelligence')"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Characters: {value.length}
      </p>
    </div>
  );
}