import { GoogleGenerativeAI } from '@google/generative-ai';
import { createEnhancementPrompt } from '../prompts/enhancementPrompt';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function enhancePromptWithGemini(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(createEnhancementPrompt(prompt));
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error('No response from Gemini');
    }

    return text;
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to enhance prompt');
  }
}