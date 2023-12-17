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
          <div
            style={{
              border: "black solid 0.125rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "1.25rem 1.25rem 1.25rem 1.25rem"
            }}
          >
            <img src={profile} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1 style={{ marginLeft: "3.125rem" }}>ANURAG</h1>
              <h1 style={{ marginLeft: "3.125rem" }}>NALKAR</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
