import React from 'react'
import styles from './Collage.module.css'

const Collage = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(imgs/background.svg)'}}>
      <div className="hero-overlay bg-opacity-85"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className={`${styles.title} mb-5 text-[5em] font-bold`}>Héctor Daniel Penedo Juarez</h1>
          <p className={`${styles.subtitle} text-[3em] font-bold`}>Estudiante de Ingeniería en Ciencias de la Computación.</p>
          <a href="https://github.com/DANdelion-0908">
            <img className={`${styles.git} mx-auto mt-[8%]`} src="github-mark/github-mark-white.png" alt="Link a GitHub" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Collage