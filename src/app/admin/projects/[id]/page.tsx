import { notFound, redirect } from 'next/navigation';
import ProjectEditor from '@/components/admin/ProjectEditor';
import Container from '@/components/common/Container';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cookies } from 'next/headers';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('owner_session')?.value;
  return token && token.length >= 5;
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: Props) {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) redirect('/admin/login');

  const { id } = await params;
  
  // Import dynamically to avoid issues
  const { getProjectById } = await import('@/lib/projects');
  const project = await getProjectById(id);
  
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/admin" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-navy mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
          
          <ProjectEditor mode="edit" project={project} />
        </div>
      </Container>
    </div>
  );
}