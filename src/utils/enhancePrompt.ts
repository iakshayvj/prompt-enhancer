import { enhancePromptWithFallback } from '../services/enhancementService';

interface EnhancementResult {
  enhancedPrompt: string;
}

export async function enhancePrompt(originalPrompt: string): Promise<EnhancementResult> {
  try {
    const enhancedPrompt = await enhancePromptWithFallback(originalPrompt);
    return { enhancedPrompt };
  } catch (error) {
    console.error('Enhancement error:', error);
    throw error;
  }
}