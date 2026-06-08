import { createClient } from '@supabase/supabase-js'

// Tutaj wklejasz swoje unikalne adresy z Supabase (znajdziesz je w Settings -> API w Supabase)
const supabaseUrl = 'https://revttstfwisxflxxvykn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldnR0c3Rmd2lzeGZseHh2eWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjMzNzUsImV4cCI6MjA5NjQ5OTM3NX0.vJSQoVEsS6OfciUieSPLbmApEVErL-959Txro76h1kw'

export const supabase = createClient(supabaseUrl, supabaseKey)