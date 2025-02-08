import './App.css'
import Nav from "./Common/Nav";
import Home from "./Home/index";
import { ToastContainer } from 'react-toastify';
import About from './About';
import { useEffect, useState } from 'react';
import Experience from './Experience';

function App() {
  const [currentOption, setcurrentOption] = useState<string>('');
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 70;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setcurrentOption('');
    }
  }
useEffect(() => {
  scrollToSection(currentOption);
}, [currentOption]);

  return (
    <>
      <Nav setcurrentOption={setcurrentOption} />
      <div id="Home">
      <Home />
      </div>
      <div id="About">
      <About />
      </div>
      <div id="Experience">
      <Experience />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
