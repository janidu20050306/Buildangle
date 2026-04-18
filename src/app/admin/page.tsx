import Link from 'next/link';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getAllProjects } from '@/lib/projects';
import AdminActions from '@/components/admin/AdminActions';
import DeleteProjectButton from '@/components/admin/DeleteProjectButton';
import Container from '@/components/common/Container';
import { Plus, Building2, Eye, Pencil, Trash2, Search, Filter } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center shadow-lg shadow-orange/20">
                  <Building2 className="text-white" size={28} />
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
                className="flex items-center gap-2 bg-white text-navy px-5 py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Eye size={18} />
                View Website
              </Link>
              <Link
                href="/admin/projects/new"
                className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-lg shadow-orange/20"
              >
                <Plus size={18} />
                Add Project
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-heading font-bold text-navy">{projects.length}</div>
                  <div className="text-gray-500 text-sm">Total Projects</div>
                </div>
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                  <Building2 className="text-orange" size={24} />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-heading font-bold text-green-600">
                    {projects.filter(p => p.status === 'done').length}
                  </div>
                  <div className="text-gray-500 text-sm">Completed</div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="text-green-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-heading font-bold text-orange">
                    {projects.filter(p => p.status === 'ongoing').length}
                  </div>
                  <div className="text-gray-500 text-sm">Ongoing</div>
                </div>
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center">
                  <svg className="text-orange" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-heading font-bold text-blue-600">
                    {projects.filter(p => p.featured).length}
                  </div>
                  <div className="text-gray-500 text-sm">Featured</div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-6 p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange transition-colors"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange">
                  <option value="">All Categories</option>
                  <option value="Luxury Villa">Luxury Villa</option>
                  <option value="Modern Home">Modern Home</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Renovation">Renovation</option>
                </select>
                <select className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange focus:border-orange">
                  <option value="">All Status</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="done">Completed</option>
                  <option value="coming-soon">Coming Soon</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Project</th>
                    <th className="text-left px-6 py-4 font-semibold">Category</th>
                    <th className="text-left px-6 py-4 font-semibold">Location</th>
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
                        <div className="flex items-center gap-4">
                          {project.image ? (
                            <div className="w-16 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                          ) : (
                            <div className="w-16 h-12 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                              <Building2 className="text-gray-400" size={20} />
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-navy">{project.title}</div>
                            <div className="text-gray-400 text-xs">{project.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {project.category || 'Modern Home'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{project.location}</td>
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
                          {project.status === 'done' ? 'Completed' : project.status === 'ongoing' ? 'Ongoing' : project.status === 'coming-soon' ? 'Coming Soon' : 'Ongoing'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{project.year}</td>
                      <td className="px-6 py-4">
                        {project.featured ? (
                          <span className="text-orange text-sm font-medium">★ Featured</span>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {project._id ? (
                            <>
                              <Link 
                                href={`/admin/projects/${project._id}`}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <Pencil size={14} />
                                Edit
                              </Link>
                              <DeleteProjectButton id={project._id} />
                              <Link 
                                href={`/projects/${project.slug}`}
                                target="_blank"
                                className="p-2 text-gray-500 hover:text-navy hover:bg-gray-100 rounded-lg transition-colors"
                                title="View on website"
                              >
                                <Eye size={16} />
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
              <div className="text-center py-16">
                <Building2 className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 text-lg mb-2">No projects yet</p>
                <p className="text-gray-400 text-sm mb-6">Add your first project to get started</p>
                <Link
                  href="/admin/projects/new"
                  className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-dark transition-colors"
                >
                  <Plus size={18} />
                  Add First Project
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}