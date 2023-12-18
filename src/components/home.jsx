import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";

function Home() {
  const arr = ["3rd Year Student", "FrontEnd Developer", "ReactJS Learner"];
  const joinedString = arr.join(" . ");
  return (
    <div className="container-fluid" style={{}}>
      <div className="row">
        <div
          className="col-2"
          style={{
            position: "sticky",
            top: "3.563rem",
            left: "0",
            backgroundColor: "#2b3035",
            height: "100vh",
          }}
        >
          <div>
            <p style={{color:"white"}}>SKILLS</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            <p style={{color:"white"}}>ReactJS</p>            
            <p style={{color:"white"}}>Bootstrap</p>
            <p style={{color:"white"}}>HTML</p>
            <p style={{color:"white"}}>CSS</p>
            <p style={{color:"white"}}>JavaScript</p>
            <p style={{color:"white"}}>C</p>
            <p style={{color:"white"}}>Python</p>
            <p style={{color:"white"}}>REST APIs</p>
          </div>
        </div>

        <div
          className="col-10"
          style={{
            overflowY: "scroll",
            height: "calc(100vh - 3.563rem)",
            scrollBehavior: "smooth",
            backgroundColor: "beige",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div>
            <h1 style={{ textDecoration: "none" }}>Hi there,</h1>
            <h2 style={{ textDecoration: "none" }}>
              Welcome to Anurag's Website
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "1.563rem" }}>{joinedString}</p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            <div className="homeCTA">
              <p style={{ textDecoration: "none", fontSize:"1.563rem" }}>Learn more about me</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  height: "3rem",
                  fontSize: "1.25rem",
                  borderRadius: "1rem",
                }}
              >
                <Link to="/about" style={{color:"white", textDecoration:"none"}}>ABOUT-&gt;</Link>
              </button>
            </div>
            <div className="homeCTA">
              <p style={{ textDecoration: "none", fontSize:"1.563rem" }}>Check out my projects</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  height: "3rem",
                  fontSize: "1.25rem",
                  borderRadius: "1rem",
                }}
              >
                <Link to="/projects" style={{color:"white", textDecoration:"none"}}>PROJECTS-&gt;</Link>
              </button>
            </div>
            <div className="homeCTA">
              <p style={{ textDecoration: "none", fontSize:"1.563rem" }}>Get in touch</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  height: "3rem",
                  fontSize: "1.25rem",
                  borderRadius: "1rem",
                }}
              >
                <Link to="/contact" style={{color:"white", textDecoration:"none"}}>CONTACT-&gt;</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
