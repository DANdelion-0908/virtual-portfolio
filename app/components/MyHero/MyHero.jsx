import React from 'react'

const MyHero = () => {
  return (
    <section id='info' className='pt-20'>
        <div className="hero h-auto w-[100%] bg-base-100 rounded-lg mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="yo.jpg" className="max-w-sm rounded-lg shadow-2xl" />
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
  )
}

export default MyHero