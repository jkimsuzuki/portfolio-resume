/**
 * @copyright 2025 Joseph Yu Kim-Suzuki
 * @license Apache-2.0
 */


/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {

  return (
    <>
       <Header />
       <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
       </main>
       <Footer />
    </>
   
  )

}


export default App;