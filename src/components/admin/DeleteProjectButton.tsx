'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteProjectButton({ id }: { id: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function handleDelete() {
    const sure = window.confirm('Delete this project? This cannot be undone.');
    if (!sure) return;

    setBusy(true);
    const response = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    setBusy(false);

    if (!response.ok) {
      window.alert('Failed to delete project.');
      return;
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      disabled={busy}
      className="border border-red-500/30 text-red-700 px-3 py-1 rounded-sm text-[10px] uppercase tracking-widest disabled:opacity-50"
    >
      {busy ? 'Deleting...' : 'Delete'}
    </button>
  );
}
