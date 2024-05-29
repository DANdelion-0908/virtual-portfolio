import React from 'react'
import TechAvatar from '../TechAvatar/TechAvatar'

const ProjectCard = ({ projects }) => {
  return (
    projects.map((project, index) => {
        return(
          <div key={index} className="card lg:card-side w-[70%] bg-base-100 shadow-xl mb-[5em]">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <TechAvatar techs={project.techs}/>
              <div className="card-actions justify-end">
                <a href={project.link} target='blank'>
                  <button className="btn hover:bg-accent">Repositorio GitHub</button>
                </a>
              </div>
            </div>
            <figure className='w-[100%]'><img src={project.image} alt="Imagen del proyecto"/></figure>
          </div>
        )
      })
  )
}

export default ProjectCard