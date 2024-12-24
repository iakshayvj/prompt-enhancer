import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { PromptInput } from './components/PromptInput';
import { EnhancedOutput } from './components/EnhancedOutput';
import { ThemeToggle } from './components/ThemeToggle';
import { enhancePrompt } from './utils/enhancePrompt';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await enhancePrompt(prompt.trim());
      setEnhancedPrompt(result.enhancedPrompt);
    } catch (error) {
      console.error('Enhancement failed:', error);
      setError('Failed to enhance prompt. Please try again.');
      setEnhancedPrompt('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-2 relative">
            <div className="flex items-center space-x-3">
              <Wand2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Prompt Enhancer</h1>
            </div>
            <div className="absolute right-0">
              <ThemeToggle />
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mt-4">
            Transform your prompts into powerful instructions using advanced prompt engineering techniques
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md p-4 text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <PromptInput
              value={prompt}
              onChange={setPrompt}
              onEnhance={handleEnhance}
              isLoading={isLoading}
            />
            
            <div className="flex justify-center">
              <button
                onClick={handleEnhance}
                disabled={isLoading || !prompt.trim()}
                className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    <span>Enhance Prompt</span>
                  </>
                )}
              </button>
            </div>

            <EnhancedOutput value={enhancedPrompt} />
          </div>
        </div>
      </main>
    </div>
  );
}