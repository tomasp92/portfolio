import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ChangeLanguage from './ChangeLanguage/index'
import Main from './pages/Main'
import ProyectsDetailsContainer from './pages/ProyectsDetailsContainer'

const App = () => {
  const [ingles, setIngles] = useState(true)
  return(
    <BrowserRouter>
      <ChangeLanguage  setIngles={setIngles} ingles={ingles}/>
      <Switch>
        <Route path='/:titulo'>
          <ProyectsDetailsContainer ingles={ingles} />
        </Route>
        <Route exact path='/' >
          <Main ingles={ingles} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
  

export default App
