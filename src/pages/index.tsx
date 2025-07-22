import { BlogForm } from '@/components/BlogForm';
import { BlogResult } from '@/components/BlogResult';
import { simulateSummary, scrapeBlog } from '@/lib/summary';
import { translateToUrdu } from '@/lib/translate';
import { saveFullText, saveSummary } from '@/lib/db';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<{ summary: string; translation: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function doSummarize(url: string) {
    setLoading(true);
    const full = await scrapeBlog(url);
    const summary = simulateSummary(full);
    const translation = translateToUrdu(summary);
    await Promise.all([
      saveFullText(url, full),
      saveSummary(url, summary)
    ]);
    setResult({ summary, translation });
    setLoading(false);
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl mb-4">Blog Summarizer</h1>
      <BlogForm onSubmit={doSummarize} />
      {loading && <p className="mt-4">Summarizing…</p>}
      {result && <BlogResult {...result} />}
    </div>
  );
}