import React, { useState } from "react"

const ChangeLanguage = ({setIngles, ingles})=>{
    const [bothShown, setBothShown] = useState(false)

    const changeLanguage = (english) => {
        setIngles(english)
        setBothShown(false)
    }

    const español = <div onClick={()=>changeLanguage(false)}> <img src='img/banderas/spain.png' alt='spain flag' /></div>
    const english = <div onClick={()=>changeLanguage(true)}> <img src='img/banderas/united_states.png' alt='us flag' /></div>
    
    return(
        <div className='languageChoice' onClick={() => setBothShown(true)} onMouseEnter={() => setBothShown(true)} onMouseLeave={() => setBothShown(false)}>
            {
                bothShown ? <div className='bothShown'> {español} {english} </div> : ingles ? english : español
            }
        </div>
    )
}
export default ChangeLanguage