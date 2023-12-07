// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
//import LeftSide from "./components/leftSide";
//import School from "./components/school";
//import HighSchool from "./components/highSchool";
//import College from "./components/college";
import Home from "./components/home";
import Contact from "./components/contact";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import "./App.css"; // You can import your global styles here
import "./components/hover.css"

function App() {
  return (
    <BrowserRouter basename="/personal_website">
      <div>
        <div
          style={{ position: "sticky", top: "0", zIndex: "10", width: "100%" }}
        >
          <NavBar />
        </div>
        <div
          style={{
          }}
        >
          <div>
            <Routes>
              <Route exact path="/personal_website" element={<Home />} />
              <Route exact path="/about" element={<AboutMe />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/projects" element={<Projects />} />
              {/* Define other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
