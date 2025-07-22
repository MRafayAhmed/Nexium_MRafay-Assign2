'use client';
import { useState } from 'react';

export function BlogForm({ onSubmit }: { onSubmit: (url: string) => void }) {
  const [url, setUrl] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(url); }}>
      <input
        className="border p-2 flex-auto"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter blog URL"
      />
      <button type="submit" className="ml-2 bg-blue-600 text-white px-4 rounded">
        Summarize
      </button>
    </form>
  );
}