import axios from 'axios';

export async function scrapeBlog(url: string): Promise<string> {
  const { data } = await axios.get(url);
  const match = data.match(/<body[^>]*>((.|\n)*)<\/body>/i);
  return match ? match[1].replace(/<[^>]+>/g, '') : '';
}

export function simulateSummary(text: string): string {
  const sentences = text.split('.').slice(0, 3).join('.').trim();
  return sentences + (sentences.endsWith('.') ? '' : '.');
}