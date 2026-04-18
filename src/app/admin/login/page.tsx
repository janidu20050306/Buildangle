'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Container from '@/components/common/Container';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      setError(payload.error ?? 'Login failed.');
      setLoading(false);
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-navy pt-32 pb-24">
      <Container>
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <div className="text-center mb-10">
              <h1 className="text-3xl font-serif text-cream mb-3 uppercase tracking-widest">Owner Access</h1>
              <p className="text-cream/40 text-sm font-light italic">Secure portal for authorized personnel</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-navy/50 border border-white/10 px-6 py-4 rounded-sm text-cream placeholder:text-cream/30 focus:border-gold/50 transition-colors"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-navy/50 border border-white/10 px-6 py-4 rounded-sm text-cream placeholder:text-cream/30 focus:border-gold/50 transition-colors"
                  placeholder="Password"
                  required
                />
              </div>
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-sm text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold hover:bg-gold/90 text-navy py-4 rounded-sm text-xs uppercase tracking-[0.3em] font-bold disabled:opacity-50 transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                {loading ? 'Authenticating...' : 'Enter Portal'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <a href="/" className="text-cream/30 text-xs uppercase tracking-widest hover:text-gold transition-colors">
                Return to Site
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
