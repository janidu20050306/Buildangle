import { redirect } from 'next/navigation';
import ProjectEditor from '@/components/admin/ProjectEditor';
import { requireOwnerPage } from '@/lib/auth/guards';

export default async function NewProjectPage() {
  const owner = await requireOwnerPage();
  if (!owner) redirect('/admin/login');

  return (
    <main className="min-h-screen bg-cream text-navy pt-28 px-6 pb-24">
      <div className="max-w-4xl mx-auto bg-white border border-navy/10 p-8 rounded-sm">
        <h1 className="text-3xl font-serif mb-2">Create Project</h1>
        <p className="text-sm text-navy/60 mb-8">Add a new project with details, photos, and delivery status.</p>
        <ProjectEditor mode="create" />
      </div>
    </main>
  );
}
