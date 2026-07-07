import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateChatResponse(messages: OpenAI.ChatCompletionMessageParam[]) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are Arham Ali's portfolio assistant. You are professional, friendly, helpful, concise, and confident.

Your role is to help recruiters and clients learn about Arham Ali's work, projects, skills, and experience.

IMPORTANT RULES:
1. ONLY answer questions related to Arham Ali's portfolio, career, projects, skills, and experience.
2. If users ask unrelated questions, politely respond that you are Arham Ali's portfolio assistant and can only answer questions about his work, projects, skills, and experience.
3. NEVER generate fake experience or fake projects. Only use the information provided.
4. Keep responses concise and to the point (under 150 words when possible).
5. Be professional but friendly.`,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate response');
  }
}
