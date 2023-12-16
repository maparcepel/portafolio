import React from 'react'

export const Skills = () => {
    return (
        <div className='animate__animated animate__fadeIn'>
            <div className='row mt-5 justify-content-center'>
                <div className='col text-center'>
                    <h4 className='conocimientos'>CONOCIMIENTOS</h4>
                </div>
            </div>

            <div className='row mt-5  justify-content-center'>
                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>
                        <h4>Lenguajes</h4>
                        <ul>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>Html</li>
                        </ul>

                    </div>

                </div>

                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>

                        <h4>Frameworks y CMS</h4>
                        <ul>
                            <li>Laravel</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>Bootstrap</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>

                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>
                        <h4>Bases de datos</h4>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>

                <div className='col-xs-12 col-sm-6 col-lg-3 d-flex justify-content-lg-center'>
                    <div className='skills'>
                        <h4>Otros</h4>
                        <ul>
                            <li>Git</li>
                            <li>Scrum</li>
                            <li>Postman</li>
                            <li>Docker</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
