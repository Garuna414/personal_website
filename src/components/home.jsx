import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import profile from '../images/profile.png'

function Home() {
  return (
    <div className="container-fluid" style={{ position: "fixed" }}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
              fontSize: "2.5rem",
              fontWeight: "bold"
            }}
          >
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>W</p>
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>E</p>
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>L</p>
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>C</p>
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>O</p>
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>M</p>
            <p style={{ margin: "1.125rem 0 1.125rem 0" }}>E</p>
          </div>
        </div>

        <div
          className="col-10"
          style={{
            overflowY: "scroll",
            height: "calc(100vh - 3.563rem)",
            scrollBehavior: "smooth"
          }}
        >
          <p style={{fontSize:"60px"}}>Hi there,</p>
          <p style={{fontSize:"50px"}}>Welcome to Anurag's Website</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
