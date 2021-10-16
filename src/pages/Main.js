import Acknowledgments from './../components/Acknowledgments'
import Header from './../components/Header/index'
import Proyects from './../components/Proyects'


const Main = ({ ingles }) =>
    <div>
        <Header ingles={ingles} />
        <div className="body">
            <h1 className='SectionTitle'>{ ingles? 'Proyects Porfolio' : 'Portfolio de proyectos' }</h1>
            <hr />
            <Proyects ingles={ingles} />
            <h1 className='SectionTitle'>{ ingles? 'Acknowledgments' : 'Reconocimientos' }</h1>
            <hr />
            <Acknowledgments  ingles={ingles} /> 
        </div> 
    </div>
export default  Main