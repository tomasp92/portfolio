import Foto from './Foto'
import Frase from './Frase'
const Header = ({ ingles }) => 
  <header className="Header">
    <Foto />
    <Frase ingles={ingles} />
  </header>
  

export default Header