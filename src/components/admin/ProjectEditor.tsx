'use client';

import { useMemo, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, Image as ImageIcon, Loader2, Save, Trash2, Info } from 'lucide-react';
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
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadingImages, setUploadingImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    status: project?.status ?? 'ongoing',
  });

  const imagesPreview = useMemo(
    () =>
      form.imagesText
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
    [form.imagesText]
  );

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue;

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.url) {
          uploadedUrls.push(data.url);
        }
      } catch (err) {
        console.error('Upload failed:', err);
      }
    }

    setUploadingImages(uploadedUrls);
    if (uploadedUrls.length > 0) {
      const newImages = form.imagesText 
        ? form.imagesText + '\n' + uploadedUrls.join('\n')
        : uploadedUrls.join('\n');
      setForm(prev => ({ ...prev, imagesText: newImages }));
    }

    setIsUploading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

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
      image: form.image || imagesPreview[0] || '',
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="px-8 py-6 border-b border-gray-200 bg-gray-50 rounded-t-2xl">
        <h2 className="text-2xl font-heading font-bold text-navy">
          {mode === 'create' ? 'Create New Project' : 'Edit Project'}
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {mode === 'create' 
            ? 'Add a new project to your portfolio' 
            : 'Update project details and images'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-8">
        {/* Basic Info Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-semibold text-navy flex items-center gap-2">
            <span className="w-1 h-6 bg-orange rounded-full"></span>
            Basic Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Title *</label>
              <input
                value={form.title}
                onChange={(e) => setForm((prev) => ({ 
                  ...prev, 
                  title: e.target.value,
                  slug: prev.slug ? prev.slug : slugify(e.target.value)
                }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="e.g., Royal Lanka Villa"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Slug *</label>
              <input
                value={form.slug}
                onChange={(e) => setForm((prev) => ({ ...prev, slug: slugify(e.target.value) }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="royal-lanka-villa"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value as Project['category'] }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value as 'ongoing' | 'done' | 'coming-soon' }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
              >
                {statuses.map((item) => (
                  <option key={item} value={item}>{item === 'done' ? 'Completed' : item === 'ongoing' ? 'Ongoing' : 'Coming Soon'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <input
                type="number"
                value={form.year}
                onChange={(e) => setForm((prev) => ({ ...prev, year: Number(e.target.value) }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                min={2000}
                max={2100}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                value={form.location}
                onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="e.g., Colombo, Sri Lanka"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
              <input
                type="number"
                value={form.area}
                onChange={(e) => setForm((prev) => ({ ...prev, area: e.target.value }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="e.g., 5000"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-semibold text-navy flex items-center gap-2">
            <span className="w-1 h-6 bg-orange rounded-full"></span>
            Description
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Short Description *</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors min-h-24"
              placeholder="Brief description for project cards"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Long Description</label>
            <textarea
              value={form.longDescription}
              onChange={(e) => setForm((prev) => ({ ...prev, longDescription: e.target.value }))}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors min-h-32"
              placeholder="Detailed description for project page"
            />
          </div>
        </div>

{/* Images Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-semibold text-navy flex items-center gap-2">
            <span className="w-1 h-6 bg-orange rounded-full"></span>
            Project Images
          </h3>

          {/* Supported Formats Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Info size={18} className="text-blue-600 mt-0.5 shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Supported Image Formats:</p>
                <p className="text-blue-700">JPG, JPEG, PNG, WebP, GIF</p>
                <p className="text-blue-600 mt-1">Maximum file size: 10MB per image</p>
                <p className="text-blue-600">Recommended resolution: 1920x1080 or higher</p>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL (Main Image) *</label>
            <div className="flex gap-4">
              <input
                value={form.image}
                onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
                className="flex-1 border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                placeholder="https://example.com/cover-image.jpg"
                required
              />
              {form.image && (
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 shrink-0">
                  <img src={form.image} alt="Cover" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-orange transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="animate-spin text-orange mb-2" size={32} />
                    <span className="text-gray-500">Uploading...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Upload className="text-gray-400 mb-2" size={32} />
                    <span className="text-gray-500">Click to upload images</span>
                    <span className="text-gray-400 text-sm mt-1">PNG, JPG up to 10MB each</span>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Image URLs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Or paste image URLs (one per line)</label>
            <textarea
              value={form.imagesText}
              onChange={(e) => setForm((prev) => ({ ...prev, imagesText: e.target.value }))}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors min-h-32"
              placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
            />
          </div>

          {/* Image Preview Grid */}
          {imagesPreview.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {imagesPreview.slice(0, 8).map((url, i) => (
                <div key={i} className="relative group aspect-video rounded-xl overflow-hidden border border-gray-200">
                  <img src={url} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
                  {i === 0 && (
                    <span className="absolute top-2 left-2 bg-orange text-white text-xs px-2 py-1 rounded">Cover</span>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      const newImages = imagesPreview.filter((_, idx) => idx !== i);
                      setForm(prev => ({ ...prev, imagesText: newImages.join('\n') }));
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Options Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading font-semibold text-navy flex items-center gap-2">
            <span className="w-1 h-6 bg-orange rounded-full"></span>
            Options
          </h3>
          
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))}
              className="w-5 h-5 text-orange rounded focus:ring-orange"
            />
            <span className="text-gray-700 font-medium">Feature this project on homepage</span>
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        {/* Submit Buttons */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-orange/30 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            {isSaving ? 'Saving...' : mode === 'create' ? 'Create Project' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin')}
            className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}