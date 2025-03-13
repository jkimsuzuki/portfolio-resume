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

const App = () => {

  return (
    <>
       <Header />
       <main>
        <Hero />
        <About />
       </main>
    </>
   
  )

}


export default App;