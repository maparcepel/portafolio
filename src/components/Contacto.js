import React from 'react'
import  Constants from '../constants'

export const Contacto = () => {

    const formData = JSON.stringify({
        name: 'marcel',
        surname: 'molina'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(Constants.API_ROUTE + 'mailer.php', {
            method: 'POST',
            body: formData
        });
        const resp = await response.json();
        console.log(resp);     
    }
    return (
        <div className='d-flex contacto'>
            <div className='container d-flex justify-content-center align-items-center'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    
                    <button onClick={ handleSubmit } type="submit" className="btn btn-primary">Submit</button>
                </form>
                
                <img src={'assets/marcel.png'} alt="" />
                <div className='contact-info'>
                    <h4><a className='animate__animated animate__flash' href="mailto:maparcepel@gmail.com"><i className="fas fa-caret-right me-1"></i>maparcepel@gmail.com</a> </h4> 
                    <h4><a href='https://www.linkedin.com/in/marcel-molina-s/' target='blank'><i className="fas fa-caret-right me-1"></i>LinkedIn</a></h4> 
                    <h4><a href={'assets/Marcel-Molina-CV.pdf'} download><i className="fas fa-caret-right me-1"></i>Descargar CV</a></h4> 
                </div>
                

            </div>
        </div>
    )
}
