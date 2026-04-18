import { redirect } from 'next/navigation';
import ProjectEditor from '@/components/admin/ProjectEditor';
import Container from '@/components/common/Container';
import { cookies } from 'next/headers';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('owner_session')?.value;
  return token && token.length >= 5;
}

export default async function NewProjectPage() {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) redirect('/admin/login');

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <Container>
        <ProjectEditor mode="create" />
      </Container>
    </div>
  );
}