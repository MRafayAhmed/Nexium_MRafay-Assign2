export function BlogResult({ summary, translation }: { summary: string; translation: string }) {
  return (
    <div className="mt-6 space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Summary (EN):</h2>
        <p className="border p-4 rounded">{summary}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">خلاصہ (UR):</h2>
        <p className="border p-4 rounded">{translation}</p>
      </div>
    </div>
  );
}