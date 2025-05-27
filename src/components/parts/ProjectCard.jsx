import React from 'react'

const ProjectCard = ({
    url,
    title,
    description,
    image1,
    image2,
    image3,
    technologies,
}) => {
  return (
    <div className='portfolio__card' id='project-card'>
        <div>
            <div className="portfolioCard__title text-center">
            <h2><a href={`https://www.${url}`} target="_blank" rel="noopener noreferrer"> {url}</a></h2>
            </div>

            <div className=''>
                <a href={`https://www.${url}`} target="_blank" rel="noopener noreferrer"> 
                    <img className='img-fluid' src={image1} alt="Project" />
                </a>
            </div>

            <div className='row mx-auto'>
                <div className='col-md-4 my-4'>
                    {
                        technologies.map((tech, i) => (
                            <p key={i} className='m-0'>{tech}</p>
                        ))
                    }

                </div>
                <div className="col-md-8 my-4">
                    <p className='fw-bold'>{title}</p>
                    {description.map((paragraph, i) => (
                        <p key={i} >{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className='row mx-auto'>
                <div className='col secondary-image' style={{ 
                    backgroundImage: `url(${image2})`, 
                    borderBottomLeftRadius: '13px'
                }}>
                </div>
                <div className='col secondary-image' style={{ 
                    backgroundImage: `url(${image3})`, 
                    borderBottomRightRadius: '13px'
                }}>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProjectCard