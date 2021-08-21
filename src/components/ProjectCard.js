import React from 'react'

export const ProjectCard = ({
    title,
    description,
    tools,
    image,
    links
}) => {
    return (
        
        <div className="col-md-6 col-lg-4 col-xl-3" >
            <div className="d-flex flex-column  portfolio__card" >
                <div className="portfolioCard__title">
                    <p>{title}</p>
                </div>           

                <div className="portfolioCard__content" 
                // style={{backgroundImage: `url(${image})`}}
                >
                    <p>{description}</p>
                </div>  

                <div className="portfolioCard__links">
                    <p>{tools}</p>
                </div> 

            </div>
            
        </div>
        
    )
}
