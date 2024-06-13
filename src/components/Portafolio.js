import React from 'react';

import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Portafolio = () => {


    return (
        <div id='portafolio'>
            <div className="container-fluid animate__animated animate__fadeIn" >
                <div className="row mt-5">
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
            </div>

            <div className='container projects animate__animated animate__fadeIn mb-5'>
                <div className="row mt-5 mb-5" id='intro'>

                    <div className="col-md-8">
                        <p className='text-right'><a href="https://www.grability.com" target='_blank' rel="noreferrer"><strong>Grability</strong> (grability.com)</a> fue la empresa en la que trabajé los dos últimos años como <strong>desarrollador web full stack</strong> a jornada completa y de manera remota. Fue la empresa responsable de la app del supermercado de <strong>El Corte Inglés </strong> y el <strong>Hipercor</strong> hasta diciembre de 2023.</p>
                        <p>Algunas de las principales tareas que desarrollé en Grability:</p>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>

                <div className="row mt-3">

                    {
                        projects.map((project, i) => (
                            <ProjectCard
                                key={i}
                                {...project} />
                        ))
                    }

                </div>

            </div>


        </div >

    )
}
