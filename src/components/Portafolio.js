import React from 'react';

import {projects} from '../data/projects';

export const Portafolio = () => {

    
    return (
        <div id='portafolio'>
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
            
            <div className='container'>

                <div className="row mt-5 justify-content-around">
                    <div className="col-12 col-sm-6 mb-5 portfolio__project" style={{backgroundImage: projects[0].image}}>
                        
                    </div>

                    <div className="col-12  col-sm-6 mb-5 portfolio__project" style={{backgroundImage: "url('/assets/projects/keymanager.png')"}}>
                        asdfsdf
                    </div>
                    <div className="col-12  col-sm-6 mb-5 portfolio__project" style={{backgroundImage: "url('/assets/projects/keymanager.png')"}}>
                        asdfsdf
                    </div>
                    <div className="col-12  col-sm-6 mb-5 portfolio__project" style={{backgroundImage: "url('/assets/projects/keymanager.png')"}}>
                        asdfsdf
                    </div>
                </div>

            </div>

            
        </div>
    )
}
