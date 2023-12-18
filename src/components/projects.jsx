import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./hover.css";
import uno from "../images/arduino_uno.png";
import sensor from "../images/humidity_sensor.png";
import sensor_prj from "../images/sensor_prj.png";
import anime from "../images/anime_recommend.png";
import movie from "../images/movie_recommend.png";
import car from "../images/D2S_car.png";
import menu from "../images/D2S_menu.png";
import weather1 from "../images/weather1.png";
import weather2 from "../images/weather2.png";


function Projects() {
  const tstack1 = ["ReactJS", "Boostrap", "JavaScript", "GeoDB Cities API", "Open Weather API", "Git Bash"];
  const tstack2 = ["Arduino", "Sensor Modelling", "HTML", "CSS"];
  const tstack3 = ["Unity 2D", "C#"]
  const tstack4 = ["Python", "Pandas", "NumPy", "Streamlit", "NLTK", "Scikit learn", "Pickle"]
  const tstack5 = ["ReactJS", "Bootstrap", "JavaScript", "Git Bash"]

  const string1 = tstack1.join(" . ");
  const string2 = tstack2.join(" . ");
  const string3 = tstack3.join(" . ");
  const string4 = tstack4.join(" . ");
  const string5 = tstack5.join(" . ");

  return (
    <div className="container-fluid" style={{  }}>
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
              <p style={{ fontSize: "1.563rem", color: "white" }}>Page contents:</p>
              <hr
                style={{
                  marginTop: "0",
                  marginBottom: "0",
                  height: "0.063rem",
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
                    transform: "translateX(-0.938rem)",
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
            height: "calc(100vh - 3.563rem)",
            scrollBehavior: "smooth",
            backgroundColor:"beige"
          }}
        >
          <h1>Projects</h1>
          <hr />
          <br />
          <br />

          <section id="weather">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "black solid 0.125rem",
                padding: "1.25rem",
                flexWrap:"wrap",
                gap:"1rem"
              }}
            >
              <div className="prjIcons" style={{ width: "27.903rem"}}>
                <img
                  className="prjImg"
                  src={weather1}
                  alt=""
                  style={{ width: "100%" }}
                />
                <img
                  className="prjImg"
                  src={weather2}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "43rem", margin: "1.25rem 1.25rem auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>WeatherUNA</h2>
                <p style={{ margin: "0 0 auto", fontSize:"1.25rem" }}>Dec 2023 - Present</p>
                <hr/>
                <p style={{fontSize: "1.35rem"}}>{string1}</p>
                <hr />
                <p style={{ fontSize: "1.563rem" }}>
                  WeatherUNA is a weather forecating app developed using ReactJS. It uses Gro DB cities API to suggest names of cities while typing and then uses OpenWeather API to fetch the current weather and forecast weather upto the next 5 days. The web app is hosted using GitHub Pages.
                </p>

                <a
                  className="repo"
                  href="https://github.com/Garuna414/React-Weather-App"
                >
                  Github Repo -&gt;
                </a>
              </div>
            </div>
          </section>
          <br />

          <section id="hsensor">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                border: "black solid 0.125rem",
                padding: "1.25rem",
                flexWrap:"wrap",
                gap:"1rem"
              }}
            >
              <div className="prjIcons" style={{ width: "27.903rem" }}>
                <img
                  className="prjImg"
                  src={uno}
                  alt=""
                  style={{ maxHeight: "12.5rem", maxWidth: "12.5rem" }}
                />
                <img
                  className="prjImg"
                  src={sensor}
                  alt=""
                  style={{ maxHeight: "12.5rem", maxWidth: "12.5rem" }}
                />
                <img
                  className="prjImg"
                  src={sensor_prj}
                  alt=""
                  style={{ maxHeight: "39.375rem", maxWidth: "31.25rem" }}
                />
              </div>
              <div style={{ width: "43rem", margin: "1.25rem 1.25rem auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>
                  Humidity measurement using Sensor and Arduino Uno
                </h2>
                <p style={{ margin: "0 0 auto", fontSize:"1.25rem" }}>Jan 2022 - Feb 2022</p>
                <hr/>
                <p style={{fontSize: "1.35rem"}}>{string2}</p>
                <hr />
                <p style={{ fontSize: "1.563rem" }}>
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
                border: "black solid 0.125rem",
                padding: "1.25rem",
                flexWrap:"wrap",
                gap:"1rem"
              }}
            >
              <div className="prjIcons" style={{ width: "27.903rem"}}>
                <img
                  className="prjImg"
                  src={menu}
                  alt=""
                  style={{ width: "100%" }}
                />
                <img
                  className="prjImg"
                  src={car}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "43rem", margin: "1.25rem 1.25rem auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>Drive 2 Survive</h2>
                <p style={{ margin: "0 0 auto", fontSize:"1.25rem" }}>Jul 2022 - Apr 2023</p>
                <hr/>
                <p style={{fontSize: "1.35rem"}}>{string3}</p>
                <hr />
                <p style={{ fontSize: "1.563rem" }}>
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
                border: "black solid 0.125rem",
                padding: "1.25rem",
                flexWrap:"wrap",
                gap:"1rem"
              }}
            >
              <div className="prjIcons" style={{ width: "27.903rem" }}>
                <img
                  className="prjImg"
                  src={anime}
                  alt=""
                  style={{ width: "100%" }}
                />
                <img
                  className="prjImg"
                  src={movie}
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ width: "43rem", margin: "1.25rem 1.25rem auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>
                  Anime Recommendation System
                </h2>
                <p style={{ margin: "0 0 auto", fontSize:"1.25rem" }}>June 2023 - July 2023</p>
                <hr/>
                <p style={{fontSize: "1.35rem"}}>{string4}</p>
                <hr />
                <p style={{ fontSize: "1.563rem" }}>
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
                border: "black solid 0.125rem",
                marginBottom: "1.25rem",
                padding: "1.25rem",
                flexWrap:"wrap",
                gap:"1rem"
              }}
            >
              <div className="prjIcons" style={{ width: "27.903rem" }}></div>
              <div style={{ width: "43rem", margin: "1.25rem 1.25rem auto" }}>
                <h2 style={{ margin: "0 0 auto" }}>Block Chain Auction App</h2>
                <p style={{ margin: "0 0 auto", fontSize:"1.25rem" }}>Jul 2023 - Present</p>
                <hr />
                <p style={{fontSize: "1.35rem"}}>{string5}</p>
                <hr />
                <p style={{ fontSize: "1.563rem" }}>
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
