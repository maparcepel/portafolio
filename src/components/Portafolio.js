import React from 'react';

import {projects} from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Portafolio = () => {

    
    return (
        <div id='portafolio'>
            <div className="container-fluid animate__animated animate__fadeIn" >
                <div className="row mt-5">
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 p-0">
                        <img  className='portfolio__face' src={'/assets/face.png'} alt="Marcel" />
                        
                    </div>

                    <div className="col-sm-1 col-md-2 col-lg-3">
                        
                        
                    </div>

                    <div className="col-sm-8 col-md-6 col-lg-5 text-center portfolio__description">
                        <img  className='img-fluid' src={'/assets/logo.png'} alt="Marcel Molina" />
                        
                    </div>

                    <div className="col-sm-1 col-md-2 col-lg-3">
                        
                        
                    </div>
                </div>
            </div>
            
            <div className='container projects animate__animated animate__fadeIn'>

                <div className="row mt-5">

                    {
                        projects.map( project => (
                            <ProjectCard 
                            key={ project.title }
                            {...project} />
                        ))
                    }
                                       
                </div>

            </div>

            
        </div>
        
    )
}
