import React from 'react';
import Projects from './Projects';

export const Portafolio = () => {


    return (
        <div id='portafolio'>
            <div className="container-fluid animate__animated animate__fadeIn" >
                <div className="row my-5">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 p-0">
                        <img className='portfolio__face' src={'/assets/face.png'} alt="Marcel" />

                    </div>

                    <div className="col-sm-1 col-md-2 col-lg-3">


                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-5 text-center">
                        <img className='img-fluid' src={'/assets/logo.png'} alt="Marcel Molina" />
                        <h1 className='mt-4 main-title'>Desarrollador Web Full Stack</h1>
                        <h3 className='mt-4 secondary-title'>PHP | Laravel | SQL</h3>
                        <h3 className='mt-1 secondary-title'>JavaScript | ReactJS | Redux | HTML | CSS</h3>
                        <h3 className='mt-1 secondary-title'>Node | Express | MongoDB</h3>
                    </div>

                    <div className="col-sm-1 col-md-2 col-lg-3">
                    </div>
                </div>

                <Projects />
            </div>
        </div >

    )
}
