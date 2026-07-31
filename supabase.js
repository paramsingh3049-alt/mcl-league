// ================================================================
// supabase.js — MCL T20 Supabase Client
// ================================================================

const SUPABASE_URL = 'https://qqhljptoctjlmdvocwek.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_jnB7VnE7ZRi4rRjw5HI5pg_QFdsPZVe';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ================================================================
// SHARED UTILITIES
// ================================================================

/**
 * Upload a file to a Supabase Storage bucket.
 * @param {string} bucket - Bucket name
 * @param {string} folder - Folder prefix inside bucket
 * @param {File}   file   - File object from input
 * @returns {Promise<string|null>} Public/stored path, or null
 */
async function uploadFile(bucket, folder, file) {
  if (!file) return null;
  const ext = file.name.split('.').pop();
  const safeName = `${folder}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
  const { data, error } = await db.storage.from(bucket).upload(safeName, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (error) {
    console.error(`Storage upload error [${bucket}/${safeName}]:`, error.message);
    throw new Error(`File upload failed: ${error.message}`);
  }
  return data.path;
}

/**
 * Get a public URL for a file in a public bucket.
 */
function getPublicUrl(bucket, path) {
  const { data } = db.storage.from(bucket).getPublicUrl(path);
  return data?.publicUrl || path;
}
