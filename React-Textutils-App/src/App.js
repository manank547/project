import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import CopyText from "./components/CopyText";
import Counting from "./components/Counting";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TextFormatter from "./components/TextFormatter";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>

   
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/textformatter" element={<TextFormatter/>}/>
     <Route path="/counter" element={<Counting/>}/>
     <Route path="/copy"  element={<CopyText/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/home" element={<Home/>}/>
     </Routes>
    
     </BrowserRouter>
     <Footer/>
     
   

    </div>
  );
}

export default App;
