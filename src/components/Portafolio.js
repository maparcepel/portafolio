import React from 'react'
export const Portafolio = () => {
    return (
        <div id='portafolio'>
            <div className="row mt-5">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 p-0">
                    <img  id='medio-yo' src={'/assets/medio-yo.png'} alt="Marcel" />
                    
                </div>

                <div className="col-sm-1 col-md-2 col-lg-3">
                    
                    
                </div>

                <div id='desc' className="col-sm-8 col-md-6 col-lg-5 text-center">
                    <img  className='img-fluid' src={'/assets/logo.png'} alt="Marcel Molina" />
                    
                </div>

                <div className="col-sm-1 col-md-2 col-lg-3">
                    
                    
                </div>
            </div>
        </div>
    )
}
