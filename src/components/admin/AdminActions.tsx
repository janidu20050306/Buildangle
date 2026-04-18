'use client';

import { useRouter } from 'next/navigation';

export default function AdminActions() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className="border border-navy/20 px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-colors"
    >
      Logout
    </button>
  );
}
