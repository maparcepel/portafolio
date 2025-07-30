import { projects } from '../data/projects';
import ProjectCard from './parts/ProjectCard';

export const Projects = () => {
  return (
    <div className='container d-flex justify-content-center'>
      {
        projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))
      }
    </div>
  )
}
