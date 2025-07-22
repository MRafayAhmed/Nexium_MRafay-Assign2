import { MongoClient } from 'mongodb';
import { createClient } from '@supabase/supabase-js';

const mongo = new MongoClient(process.env.MONGO_URL!);
export const mongoClient = mongo;

export const sb = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export async function saveFullText(url: string, text: string) {
  await mongo.connect();
  const col = mongo.db('blogs').collection('full');
  await col.insertOne({ url, text, created_at: new Date() });
}

export async function saveSummary(url: string, summary: string) {
  await sb.from('summaries').insert([{ url, summary }]);
}