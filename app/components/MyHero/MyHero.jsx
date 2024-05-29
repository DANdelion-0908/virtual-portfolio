import React from 'react'

const MyHero = () => {
  return (
    <section id='info' className='pt-20'>
        <div className="hero h-auto w-[65%] bg-base-100 rounded-lg mx-auto text-justify">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="yo.jpg" className="max-w-sm max-h-[500px] rounded-lg shadow-2xl" />
            <div className='mr-14'>
            <h1 className="text-5xl font-bold">¿Quién soy?</h1>
            <p className="py-6">Me considero una persona capaz de adaptarse a diversas situaciones y con la
                capacidad de aprender a realizar tareas que me parecen nuevas o me sacan de mi
                zona de confort, siempre buscando poder completarlas y entregar un trabajo de
                calidad. Me gusta trabajar ya sea indivdual o colectivamente y mantener un
                ambiente positivo y con buena comunicación entre mis colegas. Soy fan de
                probar nuevas experiencias y aprender de ellas con elobjetivo de aprender
                y aumentar mi conocimiento.</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default MyHero