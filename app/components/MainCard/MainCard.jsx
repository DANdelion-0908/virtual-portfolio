import React from 'react'
import styles from './MainCard.module.css'

const MainCard = () => {
  return (
    <div className={`${styles.card} flex flex-col items-center justify-center min-h-screen`}>
      <h1 className={styles.title}><strong>Héctor Daniel Penedo</strong></h1>
      <p className='mb-10'>Estudiante de Ingeniería en Ciencias de la Computación</p>
      <div className="overflow-x-auto w-full max-w-4xl max-h-96 overflow-y-auto">
        <table className="table-md table-zebra bg-neutral rounded-xl mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Tecnología</th>
              <th>Experiencia</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-t-2 border-t-black'>
              <th>1</th>
              <td>Python</td>
              <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
            </tr>
            <tr>
              <th>2</th>
              <td>Java</td>
              <td><progress class="progress progress-primary w-56" value="50" max="100"></progress></td>
            </tr>
            <tr>
              <th>3</th>
              <td>Kotlin</td>
              <td><progress class="progress progress-primary w-56" value="10" max="100"></progress></td>
            </tr>
            <tr>
              <th>4</th>
              <td>HTML</td>
              <td><progress class="progress progress-primary w-56" value="70" max="100"></progress></td>
            </tr>
            <tr>
              <th>5</th>
              <td>CSS</td>
              <td><progress class="progress progress-primary w-56" value="60" max="100"></progress></td>
            </tr>
            <tr>
              <th>6</th>
              <td>Javascript</td>
              <td><progress class="progress progress-primary w-56" value="50" max="100"></progress></td>
            </tr>
            <tr>
              <th>7</th>
              <td>Docker</td>
              <td><progress class="progress progress-primary w-56" value="40" max="100"></progress></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className={styles.title}><strong>Proyectos</strong></h1>

      <div className="card lg:card-side w-[60%] bg-base-100 shadow-xl mb-[5em]">
        <figure className='w-[100%]'><img src="/test.png" alt="Imagen del proyecto"/></figure>
        <div className="card-body">
          <h2 className="card-title">Genshin Excellen't</h2>
          <p>Un proyecto en desarrollo que tiene como objetivo facilitar <br />
          llevar el registro de lanzamientos realizados en el videojuego <br />
          Genshin Impact. </p>
          <div className="card-actions justify-end">
            <a href="https://github.com/DANdelion-0908/genshin_excellent.git" target='blank'>
              <button className="btn hover:bg-accent">Repositorio GitHub</button>
            </a>
          </div>
        </div>
      </div>

      <div className="card lg:card-side w-[60%] bg-base-100 shadow-xl mb-[5em]">
        <div className="card-body">
          <h2 className="card-title">Dan's Blog</h2>
          <p>Un blog que contiene posts con descripciones e imágenes sobre <br />
          mis videojuegos favoritos de todos los tiempos. También agrega <br />
          rutas específicas para administradores.</p>
          <div className="card-actions justify-end">
            <a href="https://github.com/DANdelion-0908/project_blog.git" target='blank'>
              <button className="btn hover:bg-accent">Repositorio GitHub</button>
            </a>
          </div>
        </div>
        <figure className='w-[100%]'><img src="/dans_blog.png" alt="Imagen del Proyecto"/></figure>
      </div>
    </div>
  )
}

export default MainCard