import React from "react"

const textEnglish = <><strong>“Hard work beats talent, </strong><strong>when talent doesn´t work hard”.</strong></>
const textoEspañol = <><strong>“El trabajo duro supera al talento, </strong><strong>cuando el talento no trabaja duro”.</strong></>


const Frase = ({ ingles }) =>{
  return (
  <div className="Frase HeaderContainer">
    <div className='FraseContainer'>
        <div id="textofrase">
          {
            ingles ? textEnglish : textoEspañol
          }
        </div>
        <h4 id='tim'>Tim Notke</h4> 
    </div>
  </div>)}
  

export default Frase