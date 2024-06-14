import React from 'react'
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard'

const Projects = () => {
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

export default Projects