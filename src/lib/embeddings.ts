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

/**
 * Generate embedding for a single text using OpenAI's text-embedding-3-small model
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const client = getOpenAI();

  if (!client) {
    throw new Error('OpenAI API key not configured');
  }

  try {
    const response = await client.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
      dimensions: 1536,
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error('Failed to generate embedding');
  }
}

/**
 * Generate embeddings for multiple texts in batch
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const client = getOpenAI();

  if (!client) {
    throw new Error('OpenAI API key not configured');
  }

  try {
    const response = await client.embeddings.create({
      model: 'text-embedding-3-small',
      input: texts,
      dimensions: 1536,
    });

    return response.data.map((item) => item.embedding);
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw new Error('Failed to generate embeddings');
  }
}
