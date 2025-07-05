import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://pmfmfgwjwbhpzyzfqmuk.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZm1mZ3dqd2JocHp5emZxbXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTQ2MjIsImV4cCI6MjA1MzU3MDYyMn0.8EY8j9_9ZcA7gSJQJ3rXKcwlIvbsKmJCCJjLxKXZqfU'

// Validate configuration
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Missing Supabase configuration. Please check your environment variables.')
}

// Create and configure Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: { 'x-my-custom-header': 'foodagri-ai' }
  }
})

// Test connection function
export const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .limit(1)

    if (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }

    console.log('Supabase connection successful')
    return true
  } catch (err) {
    console.error('Supabase connection error:', err)
    return false
  }
}

export default supabase