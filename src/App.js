import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
    AOS.init({
      once:true
    });
  }, [])

  return ( 
    <>
        <Navbar />
        <Home />  
        <Footer />  
    </>
   );
}
 
export default App;