import { projects } from '../data/projects';
import ProjectCard from './parts/ProjectCard';
import SectionTitle from "./parts/SectionTitle";

export const Projects = () => {
  return (
    <div className='container mt-5 animate__animated animate__fadeIn'>
      <SectionTitle title={'Proyectos'} />

      {
        projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))
      }
    </div>
  )
}
