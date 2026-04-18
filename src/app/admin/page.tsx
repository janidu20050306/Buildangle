import Link from 'next/link';
import { redirect } from 'next/navigation';
import { requireOwnerPage } from '@/lib/auth/guards';
import { getAllProjects } from '@/lib/projects';
import AdminActions from '@/components/admin/AdminActions';
import DeleteProjectButton from '@/components/admin/DeleteProjectButton';

export default async function AdminDashboardPage() {
  const owner = await requireOwnerPage();
  if (!owner) redirect('/admin/login');

  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-cream text-navy pt-28 px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif">Owner Project Dashboard</h1>
            <p className="text-navy/60 mt-2">{owner.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/projects/new"
              className="bg-gold text-navy px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold"
            >
              Add Project
            </Link>
            <AdminActions />
          </div>
        </div>

        <div className="overflow-x-auto bg-white border border-navy/10 rounded-sm">
          <table className="w-full text-sm">
            <thead className="bg-navy text-cream text-xs uppercase tracking-widest">
              <tr>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Year</th>
                <th className="text-left px-4 py-3">Featured</th>
                <th className="text-left px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id ?? project.slug} className="border-t border-navy/10">
                  <td className="px-4 py-3">
                    <div className="font-medium">{project.title}</div>
                    <div className="text-xs text-navy/50">{project.slug}</div>
                  </td>
                  <td className="px-4 py-3 uppercase text-xs tracking-widest">{project.status ?? 'ongoing'}</td>
                  <td className="px-4 py-3">{project.year}</td>
                  <td className="px-4 py-3">{project.featured ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {project._id ? (
                        <>
                          <Link href={`/admin/projects/${project._id}`} className="text-gold text-xs uppercase tracking-widest">
                            Edit
                          </Link>
                          <DeleteProjectButton id={project._id} />
                        </>
                      ) : (
                        <span className="text-xs text-navy/40">Static fallback data</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
