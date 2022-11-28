import About from "./componenet/About";
import "./App.css";
import React, {useState} from "react";
import Contact from "./componenet/Contact";
import Footer from "./componenet/Footer";
import Home from "./componenet/Home";
import Project from "./componenet/Project";
import Service from "./componenet/Service";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componenet/Navbar";
import LoadingBar from 'react-top-loading-bar'



function App() {
  const [progress, setProgress] = useState(0)
 
  return (
    <>
    {/* <div className="App"> */}
       <Navbar />

        <LoadingBar
         color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Project" element={<Project />} />
        <Route  path="/Contact" element={<Contact />} />
        
      </Routes>
     
       <Footer />
    </>
  );
}

export default App;
