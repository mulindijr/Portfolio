import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Services from "./components/Services"
import Porfolio from "./components/Porfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTopBtn from "./components/BackToTopBtn"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Porfolio />
      <Contact />  
      <Footer />  
      <BackToTopBtn />
    </>
  )
}

export default App
