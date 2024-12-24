import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function enhancePromptWithAI(prompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an expert prompt engineer. Enhance the given prompt by:
1. Adding specific context and goals
2. Defining clear deliverables
3. Specifying format requirements
4. Including quality criteria
5. Breaking down into steps if applicable

Keep the enhanced prompt concise and practical.`
        },
        {
          role: "user",
          content: `Enhance this prompt for better results: "${prompt}"`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const enhancedPrompt = response.choices[0]?.message?.content;
    if (!enhancedPrompt) {
      throw new Error('No response from OpenAI');
    }

    return enhancedPrompt;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to enhance prompt');
  }
}