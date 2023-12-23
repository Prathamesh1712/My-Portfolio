import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Expertise from './Components/Experties'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Banner></Banner>
     
      <Services></Services>
      <Expertise></Expertise>
      <Footer></Footer>
    </>
  )
}

export default App
