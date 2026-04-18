import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getAllProjects } from '@/lib/projects';
import DeleteProjectButton from '@/components/admin/DeleteProjectButton';
import Container from '@/components/common/Container';
import { Plus, Building2, Eye, Pencil, Trash2, Search } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 pt-28 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-navy">My Projects</h1>
              <p className="text-gray-500 mt-1">Manage your construction projects</p>
            </div>
            <Link
              href="/admin/projects/new"
              className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
            >
              <Plus size={20} />
              Add New Project
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
              <div className="text-2xl font-heading font-bold text-navy">{projects.length}</div>
              <div className="text-gray-500 text-sm">Total</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
              <div className="text-2xl font-heading font-bold text-green-600">
                {projects.filter(p => p.status === 'done').length}
              </div>
              <div className="text-gray-500 text-sm">Completed</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
              <div className="text-2xl font-heading font-bold text-orange">
                {projects.filter(p => p.status === 'ongoing').length}
              </div>
              <div className="text-gray-500 text-sm">Ongoing</div>
            </div>
          </div>

          {/* Projects List */}
          {projects.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <Building2 className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 text-lg mb-2">No projects yet</p>
              <Link
                href="/admin/projects/new"
                className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-dark"
              >
                <Plus size={18} />
                Add First Project
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Project</th>
                    <th className="text-left px-6 py-4 font-semibold">Status</th>
                    <th className="text-left px-6 py-4 font-semibold">Location</th>
                    <th className="text-left px-6 py-4 font-semibold">Year</th>
                    <th className="text-left px-6 py-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {projects.map((project) => (
                    <tr key={project._id ?? project.slug} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          {project.image ? (
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                              <Building2 className="text-orange" size={20} />
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-navy">{project.title}</div>
                            <div className="text-gray-400 text-xs">{project.category || 'Modern Home'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'done' 
                            ? 'bg-green-100 text-green-700' 
                            : project.status === 'ongoing'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {project.status === 'done' ? 'Completed' : project.status === 'ongoing' ? 'Ongoing' : 'Coming Soon'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{project.location}</td>
                      <td className="px-6 py-4 text-gray-600">{project.year}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {project._id ? (
                            <>
                              <Link 
                                href={`/admin/projects/${project._id}`}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-2 hover:bg-blue-50 rounded-lg"
                              >
                                <Pencil size={14} />
                                Edit
                              </Link>
                              <Link 
                                href={`/projects/${project.slug}`}
                                target="_blank"
                                className="p-2 text-gray-500 hover:text-navy hover:bg-gray-100 rounded-lg"
                                title="View on website"
                              >
                                <Eye size={16} />
                              </Link>
                              <DeleteProjectButton id={project._id} />
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
          )}
        </div>
      </Container>
    </div>
  );
}