import { notFound, redirect } from 'next/navigation';
import ProjectEditor from '@/components/admin/ProjectEditor';
import Container from '@/components/common/Container';
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
  
  const { getProjectById } = await import('@/lib/projects');
  const project = await getProjectById(id);
  
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <Container>
        <ProjectEditor mode="edit" project={project} />
      </Container>
    </div>
  );
}