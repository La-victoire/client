import "./App.css";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home"
import Layout from "./Layout/Layout";
import About from "./Home/About";
import { useEffect,useState } from "react";
import Projects from "./Home/Projects";
function App() {


  return (
    <div className="list-none App refin">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
           <Route index element={<Home />} />
           <Route path="/" element={<About />} />
           <Route path="/" element={<Projects />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  