import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xvdlilohvmzwgzbkjwcy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZGxpbG9odm16d2d6Ymtqd2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MTg5MjAsImV4cCI6MjA5MTM5NDkyMH0.FU5SkMkZiCg2wdD6GNlbP6bFsDyRiRkHDV7uN3q2V4U';

export const supabase = createClient(supabaseUrl, supabaseKey);
