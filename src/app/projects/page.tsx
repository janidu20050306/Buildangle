import ProjectsExplorer from '@/components/projects/ProjectsExplorer';
import { getAllProjects } from '@/lib/projects';

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsExplorer projects={projects} />;
}
