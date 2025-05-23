import { supabase } from "@/integrations/supabase/client";

interface ConversationMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export class AIService {
  private conversationHistory: ConversationMessage[] = [];

  constructor() {
    // No longer need to store API key locally
    console.log('AI Service initialized - using server-side API key');
  }

  // Remove setApiKey method as it's no longer needed
  
  async generateResponse(userMessage: string, timetableContext?: string): Promise<string> {
    console.log('generateResponse called with:', { userMessage, timetableContext });
    
    try {
      // Add user message to conversation history
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      console.log('Making request to ai-chat edge function...');

      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          userMessage,
          timetableContext
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Function error: ${error.message}`);
      }

      console.log('AI chat response received:', data);
      
      const aiResponse = data?.aiResponse || "I'm sorry, I couldn't generate a response right now. Please try again.";

      // Add AI response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: aiResponse
      });

      // Keep conversation history manageable (last 10 messages)
      if (this.conversationHistory.length > 10) {
        this.conversationHistory = this.conversationHistory.slice(-10);
      }

      console.log('Successfully generated AI response');
      return aiResponse;
    } catch (error) {
      console.error('AI Service Error Details:', {
        error: error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      return "I'm having trouble connecting to my AI brain right now 🤖 But I can still help you with your timetable and tutor information! Try asking about specific courses or days.";
    }
  }

  clearConversation() {
    this.conversationHistory = [];
  }
}

export const aiService = new AIService();
