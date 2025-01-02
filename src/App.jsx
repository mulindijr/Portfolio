import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/Services"
import Porfolio from "./components/Porfolio"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Porfolio />
      <Contact />    
    </>
  )
}

export default App
