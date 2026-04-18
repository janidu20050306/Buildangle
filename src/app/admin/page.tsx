import Link from 'next/link';
import { redirect } from 'next/navigation';
import { requireOwnerPage } from '@/lib/auth/guards';
import { getAllProjects } from '@/lib/projects';
import AdminActions from '@/components/admin/AdminActions';
import DeleteProjectButton from '@/components/admin/DeleteProjectButton';
import Container from '@/components/common/Container';
import { Plus, Settings, LogOut } from 'lucide-react';

export default async function AdminDashboardPage() {
  const owner = await requireOwnerPage();
  if (!owner) redirect('/admin/login');

  const projects = await getAllProjects();

  return (
    <div className="min-h-screen bg-navy pt-28 pb-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-3">Owner Dashboard</span>
              <h1 className="text-4xl md:text-5xl font-serif text-cream uppercase tracking-tight">Project Management</h1>
              <p className="text-cream/50 mt-3 font-light">{owner.email}</p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/admin/projects/new"
                className="flex items-center gap-3 bg-gold hover:bg-gold/90 text-navy px-8 py-4 rounded-sm text-[10px] uppercase tracking-widest font-bold transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                <Plus size={16} />
                Add Project
              </Link>
              <AdminActions />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-cream text-xs uppercase tracking-widest">
                  <tr>
                    <th className="text-left px-8 py-6 font-medium">Project Name</th>
                    <th className="text-left px-8 py-6 font-medium">Status</th>
                    <th className="text-left px-8 py-6 font-medium">Year</th>
                    <th className="text-left px-8 py-6 font-medium">Featured</th>
                    <th className="text-left px-8 py-6 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {projects.map((project) => (
                    <tr key={project._id ?? project.slug} className="hover:bg-white/5 transition-colors">
                      <td className="px-8 py-6">
                        <div className="font-serif text-lg text-cream">{project.title}</div>
                        <div className="text-xs text-cream/30 mt-1 font-mono">{project.slug}</div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-gold/10 text-gold border border-gold/20">
                          {project.status ?? 'ongoing'}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-cream/60">{project.year}</td>
                      <td className="px-8 py-6">
                        {project.featured ? (
                          <span className="text-gold text-xs uppercase tracking-widest">Yes</span>
                        ) : (
                          <span className="text-cream/30 text-xs uppercase tracking-widest">No</span>
                        )}
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-6">
                          {project._id ? (
                            <>
                              <Link href={`/admin/projects/${project._id}`} className="text-gold/60 hover:text-gold text-xs uppercase tracking-widest font-bold transition-colors">
                                Edit
                              </Link>
                              <DeleteProjectButton id={project._id} />
                            </>
                          ) : (
                            <span className="text-xs text-cream/20">Static data</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
