'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, Loader2, Save, Trash2, Info, CheckCircle, ArrowLeft } from 'lucide-react';

interface ProjectEditorProps {
  mode: 'create' | 'edit';
  project?: {
    _id?: string;
    title?: string;
    slug?: string;
    category?: string;
    location?: string;
    year?: number;
    image?: string;
    images?: string[];
    description?: string;
    longDescription?: string;
    area?: number;
    featured?: boolean;
    status?: string;
  };
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
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: project?.title ?? '',
    slug: project?.slug ?? '',
    category: project?.category ?? 'Modern Home',
    location: project?.location ?? '',
    year: project?.year ?? new Date().getFullYear(),
    image: project?.image ?? '',
    description: project?.description ?? '',
    featured: Boolean(project?.featured),
    status: project?.status ?? 'ongoing',
  });

  const [images, setImages] = useState<string[]>(project?.images ?? []);

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

    if (uploadedUrls.length > 0) {
      setImages(prev => [...prev, ...uploadedUrls]);
      if (!form.image && uploadedUrls.length > 0) {
        setForm(prev => ({ ...prev, image: uploadedUrls[0] }));
      }
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
      image: form.image || images[0] || '',
      images: images.length > 0 ? images : (form.image ? [form.image] : []),
      description: form.description,
      featured: form.featured,
      status: form.status,
    };

    const endpoint = mode === 'create' ? '/api/projects' : `/api/projects/${project?._id}`;
    const method = mode === 'create' ? 'POST' : 'PATCH';

    try {
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

      setSuccess(true);
      setTimeout(() => {
        router.push('/admin');
        router.refresh();
      }, 1500);
    } catch (err) {
      setError('Failed to save project. Please try again.');
      setIsSaving(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.push('/admin')}
          className="flex items-center gap-2 text-gray-600 hover:text-navy mb-4 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
        <h1 className="text-3xl font-heading font-bold text-navy">
          {mode === 'create' ? 'Add New Project' : 'Edit Project'}
        </h1>
        <p className="text-gray-500 mt-1">
          {mode === 'create' 
            ? 'Fill in the details below to add a new project to your portfolio' 
            : 'Update the project details below'}
        </p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6 flex items-center gap-3">
          <CheckCircle size={24} />
          <span className="font-semibold">Project saved successfully! Redirecting...</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Simple Form - Only Essential Fields */}
        
        {/* Project Name */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-heading font-semibold text-navy mb-4">Project Name *</h3>
          <input
            value={form.title}
            onChange={(e) => setForm((prev) => ({ 
              ...prev, 
              title: e.target.value,
              slug: prev.slug ? prev.slug : slugify(e.target.value)
            }))}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange"
            placeholder="e.g., Royal Lanka Villa"
            required
          />
        </div>

        {/* Category & Status */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-heading font-semibold text-navy mb-4">Category & Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange"
              >
                <option value="Modern Home">Modern Home</option>
                <option value="Luxury Villa">Luxury Villa</option>
                <option value="Commercial">Commercial</option>
                <option value="Renovation">Renovation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={form.status}
                onChange={(e) => setForm((prev) => ({ ...prev, status: e.target.value }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange"
              >
                <option value="ongoing">Ongoing</option>
                <option value="done">Completed</option>
                <option value="coming-soon">Coming Soon</option>
              </select>
            </div>
          </div>
        </div>

        {/* Location & Year */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-heading font-semibold text-navy mb-4">Location & Year</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <input
                value={form.location}
                onChange={(e) => setForm((prev) => ({ ...prev, location: e.target.value }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange"
                placeholder="e.g., Colombo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <input
                type="number"
                value={form.year}
                onChange={(e) => setForm((prev) => ({ ...prev, year: Number(e.target.value) }))}
                className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange"
                min={2000}
                max={2100}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-heading font-semibold text-navy mb-4">Description *</h3>
          <textarea
            value={form.description}
            onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange min-h-24"
            placeholder="Brief description of the project..."
            required
          />
        </div>

        {/* Image Upload */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-heading font-semibold text-navy mb-4">Project Images</h3>
          
          {/* Supported Formats */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-blue-800">
              <Info size={16} />
              <span>Supported: JPG, PNG, WebP, GIF (Max 10MB)</span>
            </div>
          </div>

          {/* Upload Button */}
          <div className="mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-orange-dark transition-colors"
            >
              {isUploading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={20} />
                  Upload Images
                </>
              )}
            </label>
          </div>

          {/* Image URLs */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Or paste image URLs (one per line)</label>
            <textarea
              value={images.join('\n')}
              onChange={(e) => setImages(e.target.value.split('\n').filter(Boolean))}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange min-h-20"
              placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
            />
          </div>

          {/* Set Cover Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL (Main Image)</label>
            <input
              value={form.image}
              onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange"
              placeholder="https://example.com/cover.jpg"
            />
          </div>

          {/* Image Preview */}
          {images.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {images.map((url, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 group">
                  <img src={url} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
                  {form.image === url && (
                    <span className="absolute top-1 left-1 bg-orange text-white text-xs px-2 py-0.5 rounded">Cover</span>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      const newImages = images.filter((_, idx) => idx !== i);
                      setImages(newImages);
                      if (form.image === url) setForm(prev => ({ ...prev, image: newImages[0] || '' }));
                    }}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Options */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))}
              className="w-5 h-5 text-orange rounded focus:ring-orange"
            />
            <span className="font-medium text-gray-700">Show on homepage (Featured)</span>
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Saving...
              </>
            ) : (
              <>
                <Save size={20} />
                {mode === 'create' ? 'Create Project' : 'Save Changes'}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin')}
            className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}