import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./hover.css";

function Projects() {
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
          <div>
            <nav
              className="nav"
              style={{
                width: "100%",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontSize: "25px", color: "white" }}>Page contents:</p>
              <hr
                style={{
                  marginTop: "0",
                  marginBottom: "0",
                  height: "1px",
                  color: "white",
                  width: "100%",
                }}
              />
              <div>
                <ul
                  style={{
                    paddingLeft: "0",
                    marginBottom: "0",
                    listStyle: "none",
                    transform: "translateX(-15px)",
                  }}
                >
                  <li>
                    {" "}
                    <a className="nav-link" href="#hsensor">
                      Humidity Sensor
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#d2s">
                      Drive 2 Survive
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#recommend">
                      Anime Recommendation System
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#blockchain">
                      Blockchain Auction System
                    </a>
                  </li>
                </ul>
              </div>

              {/*<a className="nav-link" href="#item-2">
                    Projects
        </a>*/}
            </nav>
          </div>
        </div>

        <div
          className="col-10"
          style={{
            overflowY: "scroll",
            height: "calc(100vh - 57px)",
            scrollBehavior: "smooth",
          }}
        >
          <h1>Projects</h1>
          <hr />
          <br />
          <br />

          <section id="hsensor">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "black solid 2px",
                padding: "20px",
              }}
            >
              <div style={{ width: "40%", margin: "20px 20px" }}>
                <img
                  className="prjImg"
                  src="./images/arduino_uno.png"
                  alt=""
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                />
                <img
                  className="prjImg"
                  src="./images/humidity_sensor.png"
                  alt=""
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                />
                <img
                  className="prjImg"
                  src="./images/sensor_prj.png"
                  alt=""
                  style={{ maxHeight: "630px", maxWidth: "320px" }}
                />
              </div>
              <div style={{ width: "60%", margin: "20px 20px auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>
                  Humidity measurement using Sensor and Arduino Uno
                </h2>
                <p style={{ margin: "0 0 auto", fontSize:"20px" }}>Jan 2022 - Feb 2022</p>
                <hr />
                <p style={{ fontSize: "25px" }}>
                  This Arduino project allows you to read sensor data (humidity
                  and temperature) from a DHT sensor and display it on a local
                  website served by the Arduino. The project consists of Arduino
                  code to read the sensor data and a simple HTML/JavaScript
                  frontend for displaying the data in real-time.
                </p>

                <a
                  className="repo"
                  href="https://github.com/Garuna414/WhatsTheTemperature"
                >
                  Github Repo -&gt;
                </a>
              </div>
            </div>
          </section>
          <br />

          <section id="d2s">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "black solid 2px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <div style={{ width: "40%", margin: "20px 20px auto" }}>
                <img
                  className="prjImg"
                  src="./images/D2S_menu.png"
                  alt=""
                  style={{ width: "100%" }}
                />
                <img
                  className="prjImg"
                  src="./images/D2S_car.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "60%", margin: "20px 20px auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>Drive 2 Survive</h2>
                <p style={{ margin: "0 0 auto", fontSize:"20px" }}>Jul 2022 - Apr 2023</p>
                <hr />
                <p style={{ fontSize: "25px" }}>
                  Welcome to Drive 2 Survive, an exciting singleplayer 2D car
                  racing game developed in Unity using C#! In Drive 2 Survive,
                  you'll experience thrilling racing action across four
                  challenging levels, each with its own unique vehicle. Compete
                  to achieve the fastest times, unlock new levels, and dominate
                  the high score leaderboard.
                </p>

                <a
                  className="repo"
                  href="https://github.com/Garuna414/Drive_2_Survive"
                >
                  Github Repo -&gt;
                </a>
              </div>
            </div>
          </section>
          <br />

          <section id="recommend">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "black solid 2px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <div style={{ width: "40%", margin: "20px 20px auto" }}>
                <img
                  className="prjImg"
                  src="./images/anime_recommend.png"
                  alt=""
                  style={{ width: "100%" }}
                />
                <img
                  className="prjImg"
                  src="./images/anime_recommend.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "60%", margin: "20px 20px auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>
                  Anime Recommendation System
                </h2>
                <p style={{ margin: "0 0 auto", fontSize:"20px" }}>June 2023 - July 2023</p>
                <hr />
                <p style={{ fontSize: "25px" }}>
                  This machine learning-based system utilizes Python libraries
                  such as Pandas, NumPy, Streamlit, NLTK, Scikit-learn, and
                  Pickle to recommend anime similar to the one selected by the
                  user. The system preprocesses and transforms anime
                  descriptions into tags, extracts main words, converts them
                  into vectors, and calculates cosine similarities to find and
                  display the top 10 similar anime. It distinguishes between
                  anime TV shows and movies for tailored recommendations.
                </p>{" "}
                <a
                  className="repo"
                  href="https://github.com/Garuna414/Anime_Recommendation_System"
                >
                  Github Repo -&gt;
                </a>
              </div>
            </div>
          </section>
          <br />

          <section id="blockchain">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "black solid 2px",
                marginBottom: "20px",
                padding: "20px 20px 20px 20px",
              }}
            >
              <div style={{ width: "40%", margin: "20px 20px auto" }}></div>
              <div style={{ width: "60%", margin: "20px 20px auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>Block Chain Auction App</h2>
                <p style={{ margin: "0 0 auto", fontSize:"20px" }}>Jul 2023 - </p>
                <hr />
                <p style={{ fontSize: "25px" }}>
                  This platform is being built to provide users with a seamless
                  and secure way to participate in auctions using blockchain
                  technology. Below, you will find information about the
                  website's current features and functionalities.
                </p>{" "}
                <a
                  className="repo"
                  href="https://github.com/Garuna414/BlockChain_Auction_System"
                >
                  Github Repo -&gt;
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Projects;
