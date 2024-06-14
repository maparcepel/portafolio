import React from 'react'

export const TaskCard = ({
    title,
    description,
    image,
    links
}) => {

    return (

        <div className="col-md-6 mb-5" >
            <div className="d-flex flex-column justify-content-between portfolio__card" >
                <div>
                    <div className='portfolioCard__image'>
                        <img className='img-fluid' src={image} alt="Project" />
                    </div>

                    <div className="portfolioCard__title">
                        <p>{title}</p>
                    </div>

                    <div className="portfolio__description">
                        {description.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}