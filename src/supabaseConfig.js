import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.REACT_APP_PROJECT_URL,
  process.env.REACT_APP_API_KEY
);
