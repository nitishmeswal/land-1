import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase configuration missing. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.')
}

// Provide fallback values to prevent app crash
const fallbackUrl = supabaseUrl || 'https://placeholder.supabase.co'
const fallbackKey = supabaseKey || 'placeholder-key'

export const supabase = createClient(fallbackUrl, fallbackKey)
