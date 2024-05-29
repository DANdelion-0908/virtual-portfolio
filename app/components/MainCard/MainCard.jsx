import React from 'react'
import styles from './MainCard.module.css'

const MainCard = () => {

  const projects = [
    {
      "title": "Genshin Excellen't",
      "description": "Un proyecto en desarrollo que tiene como objetivo facilitar llevar el registro de lanzamientos realizados en el videojuego Genshin Impact.",
      "image": "/imgs/Genshin_ex.png",
      "link": "https://github.com/DANdelion-0908/genshin_excellent.git",
      "techs": [
        "/techs/next.png",
        "/techs/react.png",
        "/techs/javascript.png",
        "/techs/css.png"
      ]
    },

    {
      "title": "Javascript Only Chat",
      "description": "Un chat desarrollado únicamente con Javascript y hosteado en un servidor, lo que permite enviar y recibir mensajes con otros usuarios.",
      "image": "/imgs/js_only.png",
      "link": "https://github.com/DANdelion-0908/JavaScript-Only.git",
      "techs": [
        "/techs/javascript.png",
        "/techs/css.png"
      ]
    },

    {
      "title": "Simulador de movimiento de electrones",
      "description": "Un simulador desarrollado como solución a un problema de parcial de física. Es posible modificar el entorno y apreciar el desplazamiento de lso electrones dentro de un cable. También posee una opción con la cual se simula una caminata aleatoria realizada por un electrón. .",
      "image": "/imgs/simulator.png",
      "link": "https://github.com/DANdelion-0908/Problema5_Parcial3.git",
      "techs": [
        "/techs/python.png",
      ]
    },

    {
      "title": "Sabor",
      "description": "Una aplicación web desarrollada para ser utilizada por un restaurante. Cuenta con opciones para generar reportes y facturas, abrir y cerrar cuentas, entre otras.",
      "image": "/imgs/sabor.png",
      "link": "https://github.com/chuy-zip/proyecto2_BD1.git",
      "techs": [
        "/techs/javascript.png",
        "/techs/css.png",
        "/techs/html.png",
        "techs/postgresql.svg"
      ]
    },

    {
      "title": "Copython",
      "description": "Una aplicación para Android que tiene como propósito enseñar a cualquier persona a programar en Python con guías, ejercicios y explicaciones..",
      "image": "/imgs/copython.png",
      "link": "https://github.com/chuy-zip/Proyecto_PPM_Copython.git",
      "techs": [
        "/techs/kotlin.png"
      ]
    }
  ]

  return (
    <div className={`${styles.card} flex flex-col items-center justify-center min-h-screen`}>
      <section id='info' className='pt-20'>
        <div className="hero h-auto w-[100%] bg-base-100 rounded-lg mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/yo.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">¿Quién soy?</h1>
              <p className="py-6">Me considero una persona capaz de adaptarse a diversas situaciones y con la <br />
                capacidad de aprender a realizar tareas que me parecen nuevas o me sacan de mi <br />
                zona de confort, siempre buscando poder completarlas y entregar un trabajo de <br />
                calidad. Me gusta trabajar ya sea indivdual o colectivamente y mantener un <br />
                ambiente positivo y con buena comunicación entre mis colegas. Soy fan de <br />
                probar nuevas experiencias y aprender de ellas con elobjetivo de aprender <br />
                y aumentar mi conocimiento.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='experience'>
        <h1 className={styles.title}>Experiencia trabajando con distintas tecnologías</h1>

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
      </section>

      <h1 className={styles.title}><strong>Proyectos</strong></h1>

      {projects.map((project, index) => {
        return(
          <div key={index} className="card lg:card-side w-[70%] bg-base-100 shadow-xl mb-[5em]">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a href={project.link} target='blank'>
                  <button className="btn hover:bg-accent">Repositorio GitHub</button>
                </a>
              </div>
            </div>
            <figure className='w-[100%]'><img src={project.image} alt="Imagen del proyecto"/></figure>
          </div>
        )

      })}
    
    </div>
  )
}

export default MainCard