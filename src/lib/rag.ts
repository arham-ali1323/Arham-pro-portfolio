import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { generateEmbedding } from './embeddings';
import { getVectorStore, Document } from './vectorStore';

/**
 * Load and parse knowledge base files from the data directory
 */
export function loadKnowledgeBase(): Document[] {
  const dataDir = join(process.cwd(), 'data');
  const documents: Document[] = [];

  try {
    const files = readdirSync(dataDir);

    for (const file of files) {
      const filePath = join(dataDir, file);
      const content = readFileSync(filePath, 'utf-8');
      const fileType = file.split('.').pop();

      let processedContent = content;

      // Convert JSON to readable text
      if (fileType === 'json') {
        try {
          const jsonData = JSON.parse(content);
          processedContent = JSON.stringify(jsonData, null, 2);
        } catch (e) {
          console.error(`Error parsing JSON file ${file}:`, e);
        }
      }

      documents.push({
        id: file,
        content: processedContent,
        metadata: {
          source: file,
          type: fileType || 'unknown',
        },
      });
    }
  } catch (error) {
    console.error('Error loading knowledge base:', error);
  }

  return documents;
}

/**
 * Initialize the vector store with knowledge base documents
 */
export async function initializeVectorStore(): Promise<void> {
  const vectorStore = getVectorStore();

  if (vectorStore.isInitialized()) {
    return;
  }

  const documents = loadKnowledgeBase();

  // Generate embeddings for each document
  for (const doc of documents) {
    try {
      const embedding = await generateEmbedding(doc.content);
      doc.embedding = embedding;
    } catch (error) {
      console.error(`Error generating embedding for ${doc.id}:`, error);
    }
  }

  await vectorStore.initialize(documents);
  console.log(`Vector store initialized with ${documents.length} documents`);
}

/**
 * Search for relevant documents using RAG
 */
export async function searchKnowledgeBase(
  query: string,
  topK: number = 3
): Promise<Document[]> {
  const vectorStore = getVectorStore();

  if (!vectorStore.isInitialized()) {
    await initializeVectorStore();
  }

  const queryEmbedding = await generateEmbedding(query);
  const results = await vectorStore.search(queryEmbedding, topK);

  return results;
}

/**
 * Build context from retrieved documents
 */
export function buildContext(documents: Document[]): string {
  if (documents.length === 0) {
    return '';
  }

  const contextParts = documents.map((doc, index) => {
    return `[Source: ${doc.metadata.source}]\n${doc.content}`;
  });

  return contextParts.join('\n\n---\n\n');
}

/**
 * RAG pipeline: retrieve relevant context and prepare for LLM
 */
export async function ragRetrieve(query: string): Promise<{
  context: string;
  sources: string[];
}> {
  const documents = await searchKnowledgeBase(query, 3);
  const context = buildContext(documents);
  const sources = documents.map((doc) => doc.metadata.source);

  return {
    context,
    sources,
  };
}
