import React from 'react'
import TechAvatar from '../TechAvatar/TechAvatar'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ projects }) => {
  return (
    projects.map((project, index) => {
        return(
          <div key={index} className={`${styles.card} card lg:card-side max-h-[500px] min-h-[450px] bg-base-100 shadow-xl mb-[5em]`}>
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
            <figure className='w-auto object-contain'><img src={project.image} alt="Imagen del proyecto"/></figure>
          </div>
        )
      })
  )
}

export default ProjectCard