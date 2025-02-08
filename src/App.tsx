import './App.css'
import Nav from "./Common/Nav";
import Home from "./Home/index";
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Nav />
      <Home />
      <ToastContainer />
    </>
  )
}

export default App
