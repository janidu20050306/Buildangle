import { createClient } from '@supabase/supabase-js';
import { createClient as createStorageClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseAdmin() {
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function getSupabaseStorage() {
  if (!supabaseUrl || !anonKey) {
    return null;
  }

  return createStorageClient(supabaseUrl, anonKey);
}

export const STORAGE_BUCKET = 'projects';
export const STORAGE_PATH = 'images';
