import OpenAI from 'openai';

let openai: OpenAI | null = null;

function getOpenAI() {
  if (!openai && process.env.OPENAI_API_KEY) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

export async function generateChatResponse(
  messages: OpenAI.ChatCompletionMessageParam[],
  context?: string
): Promise<string> {
  const client = getOpenAI();

  if (!client) {
    throw new Error('OpenAI API key not configured');
  }

  try {
    const systemMessage: OpenAI.ChatCompletionMessageParam = {
      role: 'system',
      content: `You are Arham Ali's portfolio assistant. You are professional, friendly, helpful, concise, and confident.

Your role is to help recruiters and clients learn about Arham Ali's work, projects, skills, and experience.

IMPORTANT RULES:
1. ONLY answer questions related to Arham Ali's portfolio, career, projects, skills, and experience.
2. If users ask unrelated questions, politely respond that you are Arham Ali's portfolio assistant and can only answer questions about his work, projects, skills, and experience.
3. NEVER generate fake experience or fake projects. Only use the information provided in the context.
4. Keep responses concise and to the point (under 150 words when possible).
5. Be professional but friendly.
6. If the context doesn't contain relevant information, say "I couldn't find that information in Arham Ali's portfolio."
7. Use markdown formatting for better readability (bold, lists, code blocks, etc.).

${context ? `CONTEXT INFORMATION:\n${context}\n\nUse this context to answer the user's question accurately.` : ''}`,
    };

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0].message.content || '';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate response');
  }
}

/**
 * Generate streaming chat response
 */
export async function* generateChatResponseStream(
  messages: OpenAI.ChatCompletionMessageParam[],
  context?: string
): AsyncGenerator<string, void, unknown> {
  const client = getOpenAI();

  if (!client) {
    throw new Error('OpenAI API key not configured');
  }

  try {
    const systemMessage: OpenAI.ChatCompletionMessageParam = {
      role: 'system',
      content: `You are Arham Ali's portfolio assistant. You are professional, friendly, helpful, concise, and confident.

Your role is to help recruiters and clients learn about Arham Ali's work, projects, skills, and experience.

IMPORTANT RULES:
1. ONLY answer questions related to Arham Ali's portfolio, career, projects, skills, and experience.
2. If users ask unrelated questions, politely respond that you are Arham Ali's portfolio assistant and can only answer questions about his work, projects, skills, and experience.
3. NEVER generate fake experience or fake projects. Only use the information provided in the context.
4. Keep responses concise and to the point (under 150 words when possible).
5. Be professional but friendly.
6. If the context doesn't contain relevant information, say "I couldn't find that information in Arham Ali's portfolio."
7. Use markdown formatting for better readability (bold, lists, code blocks, etc.).

${context ? `CONTEXT INFORMATION:\n${context}\n\nUse this context to answer the user's question accurately.` : ''}`,
    };

    const stream = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield content;
      }
    }
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate response');
  }
}
