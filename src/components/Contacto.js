import React from 'react'
import {Form} from './Form'

export const Contacto = () => {

    
    return (
        <div className='d-flex contacto flex-column justify-content-cente'>

                <div className='container d-flex justify-content-center align-items-center'>
                    <img src={'assets/marcel.png'} alt="" />
                    
                    <div className='contact-info'>
                        <h4><a className='animate__animated animate__flash' href="mailto:maparcepel@gmail.com"><i className="fas fa-caret-right me-1"></i>maparcepel@gmail.com</a> </h4> 
                        <h4><a href='https://www.linkedin.com/in/marcel-molina-s/' target='blank'><i className="fas fa-caret-right me-1"></i>LinkedIn</a></h4> 
                        <h4><a href={'assets/Marcel-Molina-CV.pdf'} download><i className="fas fa-caret-right me-1"></i>Descargar CV</a></h4> 
                    </div>
                    
                </div>

                <Form />
        </div>
    )
}
