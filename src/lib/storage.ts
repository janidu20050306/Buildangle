import { getSupabaseStorage, STORAGE_BUCKET } from './supabase-admin';

export async function uploadProjectImage(file: File): Promise<string | null> {
  const supabase = getSupabaseStorage();
  if (!supabase) return null;

  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  const filePath = `projects/${fileName}`;

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Upload error:', error);
    return null;
  }

  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}

export async function deleteProjectImage(imageUrl: string): Promise<boolean> {
  const supabase = getSupabaseStorage();
  if (!supabase) return false;

  const urlParts = imageUrl.split('/storage/v1/object/public/');
  if (urlParts.length < 2) return false;

  const filePath = urlParts[1];

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .remove([filePath]);

  return !error;
}

export function getImageUrl(path: string): string {
  const supabase = getSupabaseStorage();
  if (!supabase) return path;

  return supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path).data.publicUrl;
}