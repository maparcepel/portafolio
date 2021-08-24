import React from 'react'
import { link } from 'react-router-dom'

export const Contacto = () => {
    return (
        <div className='d-flex contacto py-3'>
            <div className='container d-flex justify-content-center align-items-center'>

                <img src={'assets/marcel.png'} alt="" />
                <div className='contact-info'>
                    <h4><a className='animate__animated animate__flash' href="mailto:maparcepel@gmail.com"><i className="fas fa-caret-right me-1"></i>maparcepel@gmail.com</a> </h4> 
                    
                    <h4><a href={'assets/Marcel-Molina-CV.pdf'} download><i className="fas fa-caret-right me-1"></i>Descargar CV</a></h4> 
                </div>
                

            </div>
        </div>
    )
}
