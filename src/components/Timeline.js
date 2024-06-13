import React from 'react'

export const Timeline = () => {
    return (
        <div className='row mt-5 animate__animated animate__fadeIn' id='timeline'>
            <div className='col-6 text-center pe-0 mb-4'>
                <h4 className='timeline-title'>Formación</h4>
                <i className="fas fa-caret-down me-1"></i>
            </div>
            <div className='col-6 text-center ps-0 mb-4'>
                <h4 className='timeline-title'>Experiencia</h4>
                <i className="fas fa-caret-down me-1"></i>
            </div>

            <div className='col-6 year-r'>

            </div>

            <div className='col-6 sobre-mi-right'>
                <h4>Desarrollador Full Stack en <a href="https://es.linkedin.com/company/grability-inc-" target='blank'><strong>Grability</strong></a> </h4>
                <p>
                    Trabajando para el supermercado de <strong>El Corte Inglés</strong> y el <strong>Hipercor</strong> como full stack del CMS y backend de la app.<br />
                    Creando nuevas funcionalidades, mejorando las existentes y resolviendo incidencias, con <strong>PHP, Laravel y PostgreSQL</strong>.<br />
                    Con <strong>ReactJS</strong>, migrando el antiguo front del CMS y creando nuevos módulos .
                </p>

            </div>

            <div className='col-6 sobre-mi-left' style={{ fontSize: '1rem' }}>
                <h4>Formación continua online</h4>
                <a href="https://www.udemy.com/course/solid-clean/" target='blank'>Principios <strong>SOLID</strong> y <strong>Clean Code</strong><br /><span className='grey'>Fernando Herrera</span></a><br />
                <a href="https://www.udemy.com/course/react-cero-experto/" target='blank'><strong>React</strong>: De cero a experto ( Hooks y MERN )<br /><span className='grey'>Fernando Herrera</span></a><br />
                <a href="https://www.udemy.com/course/react-guia-definitiva-hooks-router-redux-next-proyectos/" target='blank'><strong>React</strong> - Guía definitiva: hooks router redux next +Proyectos<br /><span className='grey'>Nicolás Schurmann</span></a><br />
                <a href="https://www.udemy.com/course/master-en-apis-restful-con-nodejs-crea-3-backends-completos/" target='blank'>Master en APIs RESTful con <strong>NodeJS</strong>: Crea 3 backends completos<br /><span className='grey'>Víctor Robles</span></a><br />
                <a href="https://www.udemy.com/course/node-de-cero-a-experto/" target='blank'><strong>Node</strong>: De cero a experto<br /><span className='grey'>Fernando Herrera</span></a><br />
                <a href="https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/" target='blank'>Master en webs Full Stack: Angular, Node, <strong>Laravel</strong>, Symfony<br /><span className='grey'>Víctor Robles</span></a><br />
                <a href="https://www.udemy.com/course/realtime-y-laravel-crea-multiples-aplicaciones-tiempo-real-con-laravel/" target='blank'>Tiempo real y <strong>Laravel</strong>: Múltiples apps realtime con Laravel<br /><span className='grey'>JuanD MeGon</span></a>
            </div>

            <div className='col-6 year-l'>


            </div>

            <div className='col-6 sobre-mi-left'>
                <h4>Curso Backend con Node.js</h4>
                <p>
                    <a href="https://www.barcelonactiva.cat/itacademy" target='blank'>IT Academy - Barcelona Activa </a> <br />Javascript, Node.js, Express, Patterns, APIs, Bases de datos, Git.
                </p>
            </div>

            <div className='col-6 year-l'>
                <div className='year-left'>
                    2021
                </div>

            </div>

            <div className='col-6 year-r'>
                <div className='year-right'>
                    2020
                </div>
            </div>

            <div className='col-6 sobre-mi-right'>
                <h4>Estudiante en prácticas en <a href="https://www.gestinet.com/" target='blank'>Gestinet Internet Informàtica</a> </h4>
                <p>
                    Principalmente Wordpress, Javascript, CSS, PHP.
                </p>

            </div>

            <div className='col-6 sobre-mi-left'>
                <h4><strong>Grado superior en Desarrollo de Aplicaciones Web</strong></h4>
                <p>
                    <a href="https://ioc.xtec.cat/educacio/cfgs-daw" target='blank'>Institut Obert de Catalunya (IOC)</a>.
                </p>
            </div>

            <div className='col-6 year-l'>


            </div>

            <div className='col-6 year-r'>

            </div>

            <div className='col-6 sobre-mi-right'>
                <h4>Estudiante en prácticas en <a href="https://clicko.es/" target='blank'>CLiCKO Informática</a> </h4>
                <p>
                    Principalmente PHP, Laravel.
                </p>

            </div>

            <div className='col-6 sobre-mi-left'>
                <h4>Curso Desarrollo de aplicaciones con tecnologías web</h4>
                <p>
                    <a href="https://www.talent.upc.edu/" target='blank'>UPC School (Universitat Politècnica de Catalunya)</a>. <br />Programación web en el entornos cliente y servidor, implantación de aplicaciones web en entorno internet, intranet y extranet, módulo de prácticas profesionales en la empresa Clicko
                </p>
            </div>

            <div className='col-6 year-l'>
                <div className='year-left'>
                    2019
                </div>

            </div>

            <div className='col-6 year-r'>
                <div className='year-right'>
                    2011
                </div>
            </div>

            <div className='col-6 sobre-mi-right'>
                <h4>Técnico de sonido en Binary Sunset </h4>
                <p>Estudio de grabación</p>
            </div>


        </div>
    )
}
