import ContainerProyectosDestacados from './ContainerProyectosDestacados/index';
import ContainerOtrosProyectos from './ContainerOtrosProyectos/index';

const Proyects = ({ ingles }) => 
  <div className="proyectos">
    <h2 className='SubtitleProyectos'>{ ingles? 'Featured Proyects' : 'Proyectos destacados' }</h2>
    <ContainerProyectosDestacados ingles={ingles} />
    <h2 className='SubtitleProyectos'>{ ingles? 'Other Proyects' : 'Proyectos destacados' }</h2>
    <ContainerOtrosProyectos ingles={ingles} />
  </div>
  

export default Proyects