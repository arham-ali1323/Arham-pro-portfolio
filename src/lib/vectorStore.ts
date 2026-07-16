/**
 * In-memory vector store for development
 * For production, consider using Pinecone, Supabase pgvector, or ChromaDB
 */

export interface Document {
  id: string;
  content: string;
  metadata: {
    source: string;
    type: string;
    [key: string]: any;
  };
  embedding?: number[];
}

class VectorStore {
  private documents: Document[] = [];
  private initialized = false;

  /**
   * Initialize the vector store with documents
   */
  async initialize(documents: Document[]): Promise<void> {
    if (this.initialized) {
      return;
    }

    this.documents = documents;
    this.initialized = true;
  }

  /**
   * Add a single document to the store
   */
  async addDocument(document: Document): Promise<void> {
    this.documents.push(document);
  }

  /**
   * Add multiple documents to the store
   */
  async addDocuments(documents: Document[]): Promise<void> {
    this.documents.push(...documents);
  }

  /**
   * Calculate cosine similarity between two vectors
   */
  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error('Vectors must have the same length');
    }

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    if (normA === 0 || normB === 0) {
      return 0;
    }

    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
  }

  /**
   * Search for similar documents using cosine similarity
   */
  async search(
    queryEmbedding: number[],
    topK: number = 5,
    minScore: number = 0.5
  ): Promise<Document[]> {
    if (!this.initialized) {
      throw new Error('Vector store not initialized');
    }

    const similarities = this.documents
      .filter((doc) => doc.embedding)
      .map((doc) => ({
        document: doc,
        score: this.cosineSimilarity(queryEmbedding, doc.embedding!),
      }))
      .filter((result) => result.score >= minScore)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    return similarities.map((result) => result.document);
  }

  /**
   * Get all documents
   */
  getAllDocuments(): Document[] {
    return this.documents;
  }

  /**
   * Clear all documents
   */
  clear(): void {
    this.documents = [];
    this.initialized = false;
  }

  /**
   * Check if store is initialized
   */
  isInitialized(): boolean {
    return this.initialized;
  }
}

// Singleton instance
let vectorStoreInstance: VectorStore | null = null;

export function getVectorStore(): VectorStore {
  if (!vectorStoreInstance) {
    vectorStoreInstance = new VectorStore();
  }
  return vectorStoreInstance;
}
