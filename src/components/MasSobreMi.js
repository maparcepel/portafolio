import React from 'react'

export const MasSobreMi = () => {
    return (
        <div id='masSobreMi' className='container mt-5 animate__animated animate__fadeIn'>
            
            <div className='row'>
                <div className='col d-flex justify-content-center '>
                    <p>
                        Toda la vida me he dedicado a actividades que combinan la tecnología con la creatividad: desde siempre como músico fanático de los sintetizadores y la tecnología musical, hace tiempo como diseñador web y los últimos años como técnico de sonido. La programación es algo que siempre estuvo latente y hace unos años decidí dar el paso.
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-8 d-flex justify-content-end'>
                    <img className='img-fluid' src={'assets/musico.png'} alt="" />
                </div>

                <div className='col-12 col-md-4 d-flex align-items-end'>
                    <p className='mb-0'>
                        Soy músico desde los 16 años, lo que me ha dado la posibilidad de viajar mucho, grabar varios discos, hacer muchos conciertos y acumular un montón de buenos recuerdos.                     
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-8 d-flex justify-content-left order-md-2'>
                    <img className='img-fluid' src={'assets/tecnico.png'} alt="" />
                </div>
                <div className='col-12 col-md-4 d-flex align-items-end order-md-1'>
                    <p className='mb-0'>
                        Mi pasión por la música me llevó además a convertirme en técnico de sonido, a entender cómo se comporta el sonido y a aprender a usar la maquinaria necesaria para controlarlo.                    
                    </p>
                </div>

            </div>

            <div className='row'>
                <div className='col-12 col-md-8 d-flex justify-content-end pe-0'>
                    <img className='img-fluid' src={'assets/sci-fi.png'} alt="" />
                </div>

                <div className='col-12 col-md-4 d-flex align-items-end'>
                    <p className='mb-0'>
                        Soy un fanático de los libros y películas de ciencia ficción, las distopías, las aventuras postapocalípticas o las space óperas.                     
                    </p>
                </div>
            </div>
            
        

    </div>
    )
}
