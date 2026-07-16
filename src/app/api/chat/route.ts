import { NextRequest, NextResponse } from 'next/server';
import { generateChatResponse, generateChatResponseStream } from '@/lib/openai';
import { ragRetrieve } from '@/lib/rag';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, stream = false } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Get the last user message for RAG retrieval
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== 'user') {
      return NextResponse.json(
        { error: 'Last message must be from user' },
        { status: 400 }
      );
    }

    // Retrieve relevant context using RAG
    let context = '';
    try {
      const { context: ragContext } = await ragRetrieve(lastMessage.content);
      context = ragContext;
    } catch (error) {
      console.error('RAG retrieval error:', error);
      // Continue without context if RAG fails
    }

    // Handle streaming response
    if (stream) {
      const encoder = new TextEncoder();
      const streamResponse = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of generateChatResponseStream(messages, context)) {
              controller.enqueue(encoder.encode(chunk));
            }
            controller.close();
          } catch (error) {
            console.error('Streaming error:', error);
            controller.error(error);
          }
        },
      });

      return new NextResponse(streamResponse, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    // Handle non-streaming response
    const response = await generateChatResponse(messages, context);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate response';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
