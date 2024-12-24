export async function enhancePromptWithMock(prompt: string): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return `Here's your enhanced prompt with best practices applied:

Goal: ${prompt}

Enhanced Version:
As an expert in this field, I need to ${prompt.toLowerCase()}. The output should be comprehensive yet concise, focusing on key deliverables and measurable outcomes. Please provide detailed steps and consider industry best practices throughout the process. Include specific examples where relevant and ensure the response addresses potential challenges and their solutions.

Key aspects to address:
1. Specific objectives and success criteria
2. Step-by-step methodology
3. Required resources and prerequisites
4. Quality assurance measures
5. Expected outcomes and deliverables`
}