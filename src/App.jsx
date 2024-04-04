import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/UpdateUser'
import './App.css'


const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
   
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


