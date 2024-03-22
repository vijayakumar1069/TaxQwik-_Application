import { useState } from 'react'


import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ReturnsGetter from './Components/ReturnsGetter'
import TaxForm from './Components/TaxForm'
import TotalCost from './Components/TotalCost'

function App() {
 

  return (
   <>
   <Navbar/>
   <Hero/>
   <ReturnsGetter/>
   <TaxForm/>
   <TotalCost/>
   </>
  )
}

export default App
