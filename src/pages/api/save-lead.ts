import type { APIRoute } from 'astro';
import type { Lead } from '../../types/lead.types';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const lead: Lead = await request.json();

    // Validaciones
    if (!lead.name || !lead.email || !lead.whatsapp) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields',
        missing: {
          name: !lead.name,
          email: !lead.email,
          whatsapp: !lead.whatsapp
        }
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(lead.email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validar WhatsApp (básico)
    if (lead.whatsapp.length < 10) {
      return new Response(JSON.stringify({ error: 'Invalid WhatsApp number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Guardar en Supabase
    await saveToSupabase(lead);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Save lead error:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    return new Response(JSON.stringify({ 
      error: 'Failed to save lead',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

async function saveToSupabase(lead: Lead) {
  const SUPABASE_URL = import.meta.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;
  
  console.log('🔍 Debug - URL:', SUPABASE_URL ? 'Found' : 'Missing');
  console.log('🔍 Debug - Key:', SUPABASE_ANON_KEY ? 'Found' : 'Missing');
  
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Supabase not configured');
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { error } = await supabase
    .from('leads')
    .insert([{
      name: lead.name,
      email: lead.email,
      whatsapp: lead.whatsapp,
      language: lead.language,
      detected_service: lead.detected_service,
      visited_demos: lead.visited_demos,
      user_request: lead.user_request,
      project_summary: lead.project_summary
    }]);

  if (error) {
    console.error('❌ Supabase error:', error);
    throw error;
  }

  console.log('✅ Lead saved to Supabase successfully');
}
