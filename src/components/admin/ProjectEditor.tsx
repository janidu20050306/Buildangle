'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Project } from '@/lib/constants';

const categories: Project['category'][] = ['Luxury Villa', 'Modern Home', 'Renovation', 'Commercial'];
const statuses: NonNullable<Project['status']>[] = ['ongoing', 'done', 'coming-soon'];

interface ProjectEditorProps {
  mode: 'create' | 'edit';
  project?: Project & { _id?: string };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function ProjectEditor({ mode, project }: ProjectEditorProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: project?.title ?? '',
    slug: project?.slug ?? '',
    category: project?.category ?? categories[0],
    location: project?.location ?? '',
    year: project?.year ?? new Date().getFullYear(),
    image: project?.image ?? '',
    imagesText: (project?.images ?? []).join('\n'),
    description: project?.description ?? '',
    longDescription: project?.longDescription ?? '',
    area: project?.area?.toString() ?? '',
    featured: Boolean(project?.featured),
    status: project?.status ?? statuses[0],
  });

  const imagesPreview = useMemo(
    () =>
      form.imagesText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
    [form.imagesText]
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug || slugify(form.title),
      category: form.category,
      location: form.location,
      year: Number(form.year),
      image: form.image,
      images: imagesPreview,
      description: form.description,
      longDescription: form.longDescription,
      area: form.area ? Number(form.area) : undefined,
      featured: form.featured,
      status: form.status,
    };

    const endpoint = mode === 'create' ? '/api/projects' : `/api/projects/${project?._id}`;
    const method = mode === 'create' ? 'POST' : 'PATCH';

    const response = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error ?? 'Failed to save project.');
      setIsSaving(false);
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          value={form.title}
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
          placeholder="Project name"
          required
        />
        <input
          value={form.slug}
          onChange={(e) => setForm((prev) => ({ ...prev, slug: slugify(e.target.value) }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
          placeholder="project-slug"
          required
        />
        <select
          value={form.category}
          onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value as Project['category'] }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          value={form.status}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, status: e.target.value as NonNullable<Project['status']> }))
          }
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
        >
          {statuses.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          value={form.location}
          onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
          placeholder="Location"
          required
        />
        <input
          type="number"
          value={form.year}
          onChange={(e) => setForm((prev) => ({ ...prev, year: Number(e.target.value) }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
          placeholder="Year"
          required
        />
        <input
          value={form.image}
          onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm md:col-span-2"
          placeholder="Cover image URL"
          required
        />
      </div>

      <textarea
        value={form.description}
        onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
        className="w-full bg-white border border-navy/10 px-4 py-3 rounded-sm min-h-24"
        placeholder="Short description"
        required
      />

      <textarea
        value={form.longDescription}
        onChange={(e) => setForm((prev) => ({ ...prev, longDescription: e.target.value }))}
        className="w-full bg-white border border-navy/10 px-4 py-3 rounded-sm min-h-32"
        placeholder="Long description"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="number"
          value={form.area}
          onChange={(e) => setForm((prev) => ({ ...prev, area: e.target.value }))}
          className="bg-white border border-navy/10 px-4 py-3 rounded-sm"
          placeholder="Area (sq ft)"
        />
        <label className="flex items-center gap-3 text-sm uppercase tracking-widest">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))}
          />
          Featured Project
        </label>
      </div>

      <textarea
        value={form.imagesText}
        onChange={(e) => setForm((prev) => ({ ...prev, imagesText: e.target.value }))}
        className="w-full bg-white border border-navy/10 px-4 py-3 rounded-sm min-h-40"
        placeholder="Project photo URLs, one per line"
      />

      {imagesPreview.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imagesPreview.slice(0, 8).map((url) => (
            <div key={url} className="border border-navy/10 p-2 rounded-sm text-xs truncate">
              {url}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isSaving}
        className="bg-gold text-navy px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-bold disabled:opacity-60"
      >
        {isSaving ? 'Saving...' : mode === 'create' ? 'Create Project' : 'Save Changes'}
      </button>
    </form>
  );
}
