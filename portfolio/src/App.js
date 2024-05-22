import { useState } from "react";
/* 
import Services from "./components/Services";

import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import SocialLinks from "./components/SocialLinks";

import Certifications from "./components/Certifications";
import Technologies from "./components/Technologies";
 */
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio"


function App() {

  const[darkMode, setDarkMode] = useState(true)
  return (
    
    <div className={darkMode && "dark"}>
     
      <Header darkMode = {darkMode} setDarkMode = {setDarkMode} />
      

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        <Home />
     <About />
     <Portfolio />
           {/* 
     
        <Technologies />
        <Services />
        
        <Certifications />
        <Contact />
        <Footer />

        <SocialLinks /> */}
      </main>
      
    </div>
    
  )
}

export default App;