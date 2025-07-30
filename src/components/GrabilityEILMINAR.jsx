import React from 'react'
import { GBYTasks } from '../data/GBYTasks';
import { TaskCard } from './TaskCard';

const Grability = () => {
  return (
    <div className='container grability animate__animated animate__fadeIn mb-5'>
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
                        GBYTasks.map((task, i) => (
                            <TaskCard
                                key={i}
                                {...task} />
                        ))
                    }

                </div>

            </div>
  )
}

export default Grability