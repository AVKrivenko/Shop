import React from "react";

import {  Route, Routes } from 'react-router-dom';
import Contacs from './pages/Contacs';
import Ofice from './pages/Ofice';
import Home from './pages/Home';
import About from './pages/About'



class App extends React.Component {
render(){
  return(<div>
    {/* <Routes>
          
          <Route exat path='/Contacs' element={<Contacs/>}></Route>
          <Route  exat path='/About' element={<About/>}></Route>
          <Route exat  path='/Ofice' element={<Ofice/>}></Route>
         
        </Routes> */}
    <Home/>

    </div>
  )
}
}
export default App;
