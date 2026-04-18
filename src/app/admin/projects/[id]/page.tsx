import { notFound, redirect } from 'next/navigation';
import ProjectEditor from '@/components/admin/ProjectEditor';
import { requireOwnerPage } from '@/lib/auth/guards';
import { getProjectById } from '@/lib/projects';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: Props) {
  const owner = await requireOwnerPage();
  if (!owner) redirect('/admin/login');

  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-cream text-navy pt-28 px-6 pb-24">
      <div className="max-w-4xl mx-auto bg-white border border-navy/10 p-8 rounded-sm">
        <h1 className="text-3xl font-serif mb-2">Edit Project</h1>
        <p className="text-sm text-navy/60 mb-8">Update details, status, and project photo URLs.</p>
        <ProjectEditor mode="edit" project={project} />
      </div>
    </main>
  );
}
