import React from 'react'

export const ProjectCard = ({
    title,
    description,
    image,
    links
}) => {
    return (
        
        <div className="col-md-6 col-lg-4 col-xl-3 mb-5" >
            <div className="d-flex flex-column justify-content-between portfolio__card" >
                <div>
                    <div className="portfolioCard__title">
                        <p>{title}</p>
                    </div>           

                    <div className='portfolioCard__image'>
                        <img className='img-fluid' src={image} alt="Project" />
                    </div>  

                    <div className="portfolio__description">
                        <p>{description}</p>
                    </div>  
                </div>

                <div className="portfolioCard__links d-flex justify-content-around">
                    {
                        links.map( link =>(
                            <img key={link.url} src={link.icon} title={link.title} alt=""/>
                        ))
                    }
                </div> 

            </div>
            
        </div>
        
    )
}
