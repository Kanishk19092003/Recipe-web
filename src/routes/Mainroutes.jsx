import {  Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Recipes from '../Pages/Recipes'
import Create from '../pages/Create'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/create-recipe" element={<Create/>}/>
    </Routes>
  )
}

export default Mainroutes