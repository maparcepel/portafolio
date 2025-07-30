
export const Contact = () => {


    return (
        <div className='d-flex contacto flex-column justify-content-cente'>

            <div className='container d-flex justify-content-center align-items-center'>
                <img src={'assets/marcel.png'} alt="" style={{ width: '250px' }} />

                <div className='contact-info'>
                    <h4><a className='animate__animated animate__flash' href="mailto:marcelmolina.dev@gmail.com"><i className="fas fa-caret-right me-1"></i>marcelmolina.dev@gmail.com</a> </h4>
                    <h4><a href='https://www.linkedin.com/in/marcel-molina-s/' target='blank'><i className="fas fa-caret-right me-1"></i>LinkedIn</a></h4>
                    <h4><a href={'assets/Marcel-Molina-CV.pdf'} download><i className="fas fa-caret-right me-1"></i>Descargar CV</a></h4>
                </div>

            </div>
        </div>
    )
}
