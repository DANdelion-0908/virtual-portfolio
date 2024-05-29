import React from 'react'

const MyFooter = () => {
  return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <h1 className='text-[2rem] mb-7 mt-10'>Contacto</h1>
                <div>
                    <a className='mr-5' href="https://www.instagram.com/mr.dan.penedo?igsh=Z3RqZXdvZ3VoY2Nv" target='_blank'>
                        <button className="btn btn-outline btn-accent">@mr.dan.penedo</button>
                    </a>
                    <a className='mr-5' href="https://github.com/DANdelion-0908" target='_blank'>
                        <button className="btn btn-outline btn-accent">DANdelion-0908</button>
                    </a>
                    <a href="https://mail.google.com/"target='_blank'>
                        <button className="btn btn-outline btn-accent">danielpenedo2@gmail.com</button>
                    </a>
                </div>
            </aside>
        </footer>
  )
}

export default MyFooter