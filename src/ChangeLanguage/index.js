import React, { useState } from "react"

const ChangeLanguage = ({setIngles, ingles})=>{
    const [bothShown, setBothShown] = useState(false)

    const español = <div onClick={()=>setIngles(false)}> <img src='img/banderas/spain.png' alt='spain flag' /></div>
    const english = <div onClick={()=>setIngles(true)}> <img src='img/banderas/united_states.png' alt='us flag' /></div>
    
    return(
        <div className='languageChoice' onMouseEnter={() => setBothShown(true)} onMouseLeave={() => setBothShown(false)}>
            {
                bothShown ? <> {español} {english} </> : ingles ? english : español
            }
        </div>
    )
}
export default ChangeLanguage