import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getAllProjects } from '@/lib/projects';
import AdminActions from '@/components/admin/AdminActions';
import DeleteProjectButton from '@/components/admin/DeleteProjectButton';
import Container from '@/components/common/Container';
import { Plus, Building2, Eye, Pencil, Trash2 } from 'lucide-react';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('owner_session')?.value;
  return token && token.length >= 5;
}

export default async function AdminDashboardPage() {
  const isAuthenticated = await checkAuth();
  
  if (!isAuthenticated) {
    redirect('/admin/login');
  }

  const projects = await getAllProjects();

  return (
    <div className="min-h-screen bg-gray-100 pt-28 pb-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                  <Building2 className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-3xl font-heading font-bold text-navy">Project Dashboard</h1>
                  <p className="text-gray-500 text-sm">Manage your construction projects</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 bg-white text-navy px-5 py-3 rounded-lg border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Eye size={18} />
                View Website
              </Link>
              <Link
                href="/admin/projects/new"
                className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
              >
                <Plus size={18} />
                Add Project
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-3xl font-heading font-bold text-navy">{projects.length}</div>
              <div className="text-gray-500 text-sm">Total Projects</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-3xl font-heading font-bold text-green-600">
                {projects.filter(p => p.status === 'done').length}
              </div>
              <div className="text-gray-500 text-sm">Completed</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-3xl font-heading font-bold text-orange">
                {projects.filter(p => p.status === 'ongoing').length}
              </div>
              <div className="text-gray-500 text-sm">Ongoing</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="text-3xl font-heading font-bold text-blue-600">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-500 text-sm">Featured</div>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-heading font-semibold text-navy">All Projects</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Project</th>
                    <th className="text-left px-6 py-4 font-semibold">Status</th>
                    <th className="text-left px-6 py-4 font-semibold">Year</th>
                    <th className="text-left px-6 py-4 font-semibold">Featured</th>
                    <th className="text-left px-6 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {projects.map((project) => (
                    <tr key={project._id ?? project.slug} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-navy">{project.title}</div>
                        <div className="text-gray-400 text-xs mt-1">{project.slug}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'done' 
                            ? 'bg-green-100 text-green-700' 
                            : project.status === 'ongoing'
                            ? 'bg-orange-100 text-orange-700'
                            : project.status === 'coming-soon'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {project.status ?? 'ongoing'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{project.year}</td>
                      <td className="px-6 py-4">
                        {project.featured ? (
                          <span className="text-orange text-sm font-medium">Featured</span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {project._id ? (
                            <>
                              <Link 
                                href={`/admin/projects/${project._id}`}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                              >
                                <Pencil size={14} />
                                Edit
                              </Link>
                              <DeleteProjectButton id={project._id} />
                              <Link 
                                href={`/projects/${project.slug}`}
                                target="_blank"
                                className="flex items-center gap-1 text-gray-500 hover:text-navy text-sm"
                              >
                                <Eye size={14} />
                              </Link>
                            </>
                          ) : (
                            <span className="text-gray-400 text-xs">Static</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {projects.length === 0 && (
              <div className="text-center py-12">
                <Building2 className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500">No projects yet. Add your first project!</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}