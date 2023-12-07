import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div className="container-fluid" style={{ position: "fixed" }}>
      <div className="row">
        <div
          className="col-2"
          style={{
            position: "sticky",
            top: "57px",
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
              fontSize: "40px",
              fontWeight: "bold"
            }}
          >
            <p style={{ margin: "18px 0 18px 0" }}>W</p>
            <p style={{ margin: "18px 0 18px 0" }}>E</p>
            <p style={{ margin: "18px 0 18px 0" }}>L</p>
            <p style={{ margin: "18px 0 18px 0" }}>C</p>
            <p style={{ margin: "18px 0 18px 0" }}>O</p>
            <p style={{ margin: "18px 0 18px 0" }}>M</p>
            <p style={{ margin: "18px 0 18px 0" }}>E</p>
          </div>
        </div>

        <div
          className="col-10"
          style={{
            overflowY: "scroll",
            height: "calc(100vh - 57px)",
            scrollBehavior: "smooth"
          }}
        >
          <div
            style={{
              border: "black solid 2px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "20px 20px 20px 20px"
            }}
          >
            <img src="/images/profile.png" alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <h1 style={{ marginLeft: "50px" }}>ANURAG</h1>
              <h1 style={{ marginLeft: "50px" }}>NALKAR</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
