import { useContext } from "react";
import Contact from "./components/Contact/Contact";
import About from "./components/intro/About/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/intro/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";


function App() {
  const {darkMode} = useContext(ThemeContext)
  
  return (
    <div style={{
      backgroundColor: darkMode && '#222', color: darkMode && 'white'
    }}>


    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>
  );
}

export default App;
