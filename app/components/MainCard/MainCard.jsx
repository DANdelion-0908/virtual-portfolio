import React from 'react'
import styles from './MainCard.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import MyHero from '../MyHero/MyHero'
import ExpTable from '../ExpTable/ExpTable'

const MainCard = () => {

  const projects = [
    {
      "title": "Genshin Excellen't",
      "description": "Un proyecto en desarrollo que tiene como objetivo facilitar llevar el registro de lanzamientos realizados en el videojuego Genshin Impact.",
      "image": "imgs/Genshin_ex.png",
      "link": "https://github.com/DANdelion-0908/genshin_excellent.git",
      "techs": [
        "techs/next.png",
        "techs/react.png",
        "techs/javascript.png",
        "techs/css.png",
        "techs/node.png"
      ]
    },

     {
      "title": "MK-Publicidad",
      "description": "Proyecto de tienda en línea en desarrollo para una empresa que se dedida a la venta de productos y accesorios personalizados.",
      "image": "imgs/mk.png",
      "link": "https://github.com/Diegoval-Dev/MK-Publicidad.git",
      "techs": [
        "techs/vite.png",
        "techs/react.png",
        "techs/express.png",
        "techs/node.png",
        "techs/javascript.png",
        "techs/html.png",
        "techs/css.png",
        "techs/docker.png",
      ]
     },

     {
      "title": "Dan's Blog",
      "description": "Blog que contiene posts sobre mis videojuegos favoritos de todos los tiempos. Tiene como características la implementación de rutas para usuarios y administradores, área de CRUD, entre otras.",
      "image": "imgs/dans_blog.png",
      "link": "https://github.com/DANdelion-0908/project_blog.git",
      "techs": [
        "techs/vite.png",
        "techs/react.png",
        "techs/express.png",
        "techs/node.png",
        "techs/javascript.png",
        "techs/html.png",
        "techs/css.png",
        "techs/docker.png",
      ]
     },

    {
      "title": "Javascript Only Chat",
      "description": "Un chat desarrollado únicamente con Javascript y hosteado en un servidor, lo que permite enviar y recibir mensajes con otros usuarios.",
      "image": "imgs/js_only.png",
      "link": "https://github.com/DANdelion-0908/JavaScript-Only.git",
      "techs": [
        "techs/javascript.png",
        "techs/css.png",
        "techs/node.png"
      ]
    },

    {
      "title": "Simulador de movimiento de electrones",
      "description": "Un simulador desarrollado como solución a un problema de parcial de física. Es posible modificar el entorno y apreciar el desplazamiento de lso electrones dentro de un cable. También posee una opción con la cual se simula una caminata aleatoria realizada por un electrón. .",
      "image": "imgs/simulator.png",
      "link": "https://github.com/DANdelion-0908/Problema5_Parcial3.git",
      "techs": [
        "techs/python.png",
        "techs/customtk.png"
      ]
    },

    {
      "title": "Sabor",
      "description": "Una aplicación web desarrollada para ser utilizada por un restaurante. Cuenta con opciones para generar reportes y facturas, abrir y cerrar cuentas, entre otras.",
      "image": "imgs/sabor.png",
      "link": "https://github.com/chuy-zip/proyecto2_BD1.git",
      "techs": [
        "techs/javascript.png",
        "techs/docker.png",
        "techs/vite.png",
        "techs/express.png",
        "techs/css.png",
        "techs/html.png",
        "techs/postgresql.svg",
        "techs/node.png"
      ]
    },

    {
      "title": "Copython",
      "description": "Una aplicación para Android que tiene como propósito enseñar a cualquier persona a programar en Python con guías, ejercicios y explicaciones..",
      "image": "imgs/copython.png",
      "link": "https://github.com/chuy-zip/Proyecto_PPM_Copython.git",
      "techs": [
        "techs/kotlin.png",
        "techs/compose.png"
      ]
    }
  ]

  const achievements = [
    "imgs/diploma.png",
    "imgs/robot.jpg",
    "imgs/title.png"
  ]

  return (
    <div className={`${styles.card} flex flex-col items-center justify-center min-h-screen`}>
      {<MyHero />}

      <h1 className={styles.title}>Experiencia</h1>

      {<ExpTable />}

      <h1 className={styles.title}><strong>Proyectos</strong></h1>

      {<ProjectCard projects={projects} />}

      <h1 className={styles.title}><strong>Méritos</strong></h1>
    
      <div className={styles.achievements}>
        {achievements.map((achievement, index) => {
          return(
              <img key={index} className={styles.imgs} src={achievement} alt="Imagen del mérito" />
          )
        })}
      </div>
    </div>
  )
}

export default MainCard