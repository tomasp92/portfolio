import React from "react"
import CustomCarousel from '../CustomCarousel/index'

const Proyectos = ({ proyectos, ingles }) =>
    <div>
        <ul>
            {proyectos.map((proyecto) => {
                return (
                    <li key={proyecto.id}>
                        <h3>{ ingles? proyecto.title : proyecto.titulo }</h3>
                        <div className='carouselContainer'>
                            <CustomCarousel proyecto={proyecto}/>
                        </div>
                        <div className='ProyectoTexto'>
                            { ingles? proyecto.text : proyecto.texto }
                        </div>
                    </li>
                )
                })
            }
        </ul>
    </div>


export default Proyectos