import { enhancePromptWithGemini } from './gemini';
import { enhancePromptWithMock } from './mockEnhancer';

export async function enhancePromptWithFallback(prompt: string): Promise<string> {
  try {
    // First try with Gemini
    return await enhancePromptWithGemini(prompt);
  } catch (error) {
    console.warn('Gemini enhancement failed, falling back to mock:', error);
    // Fallback to mock enhancer
    return await enhancePromptWithMock(prompt);
  }
}