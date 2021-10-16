import CustomCarousel from './../CustomCarousel/index'

const Proyecto = ({ proyecto, ingles }) => 
    <div className='ProyectoTexto'>
       <h3>{proyecto.titulo}</h3>
       <br />

       { proyecto.video && <div className='videoContainer'> {proyecto.video} </div> }
       <br /><br />
       <CustomCarousel proyecto={proyecto} />
       <br />
       {
           ingles ? proyecto.text : proyecto.texto
       }
    </div>
export default Proyecto
