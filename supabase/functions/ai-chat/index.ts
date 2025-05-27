
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ConversationMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userMessage, timetableContext } = await req.json();

    console.log('AI Chat request received:', { userMessage, hasTimetableContext: !!timetableContext });

    if (!openAIApiKey) {
      console.error('OpenAI API key not found in environment');
      return new Response(JSON.stringify({ 
        error: 'AI service is not configured. Please contact the administrator.' 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // System prompt for BBK BOT
    const systemMessage: ConversationMessage = {
      role: 'system',
      content: `You are BBK BOT, a friendly and helpful university timetable assistant for Birkbeck University students. You help students with their course schedules, class information, and general university queries including tutor information.

Key guidelines:
- Be conversational, friendly, and helpful
- Focus on timetable and course-related queries
- Use emojis appropriately to make responses engaging
- Keep responses concise but informative
- If you don't have specific timetable information, encourage the user to ask about specific courses or days
- Always maintain a helpful and supportive tone

You have access to the student's timetable data and tutor information:

TUTOR INFORMATION:
- Software and Programming III (BUCI056H6): Dr. Keith L. Mannock, Module Leader, k.mannock@bbk.ac.uk
- Software Engineering II (BUCI067H6): Dr. Jan Hidders, Module Convenor, j.hidders@bbk.ac.uk
- Data Analytics Using R (BUCI045H6): Jeremy Smallwood, Module Convenor, jeremy.smallwood@bbk.ac.uk
- Data Management and Analysis: Jeremy Smallwood, Module Convenor, jeremy.smallwood@bbk.ac.uk
- Mobile Computing (BUCI046H6): George Kortsaridis, Module Convenor, g.kortsaridis@bbk.ac.uk
- BSc Computing Project (BUCI027S6): Steve Morgan, Programme Administrator, cs-ug@bbk.ac.uk

You can provide information about:
- Course schedules and times
- Class locations
- Course types (HyFlex, Online, In-Person)
- Weekly schedules
- Upcoming classes
- Tutor information and contact details
- Module codes and course names

When students ask about tutors, provide the tutor's name, role, and email address in a helpful format.`
    };

    // Prepare the message with timetable context if available
    let contextualMessage = userMessage;
    if (timetableContext) {
      contextualMessage = `User query: "${userMessage}"\n\nRelevant timetable information:\n${timetableContext}\n\nPlease provide a conversational response that incorporates this timetable information.`;
    }

    const messages: ConversationMessage[] = [
      systemMessage,
      {
        role: 'user',
        content: contextualMessage
      }
    ];

    console.log('Making OpenAI API request...');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', {
        status: response.status,
        statusText: response.statusText,
        errorText: errorText
      });
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');
    
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response right now. Please try again.";

    return new Response(JSON.stringify({ aiResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in ai-chat function:', error);
    return new Response(JSON.stringify({ 
      error: "I'm having trouble connecting to my AI brain right now 🤖 But I can still help you with your timetable and tutor information! Try asking about specific courses or days."
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
