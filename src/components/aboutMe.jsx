import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./hover.css";
import VideoBg from "../assets/timelapse.mp4";

function AboutMe() {
  document.body.style.margin = "0";
  const skillBody = {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    height: "90px",
    backgroundColor: "lightgray",
    borderRadius: "30px",
    padding: "10px",
    margin: "0 10px",
    textAlign: "center",
    justifyContent: "center",
  };

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
                    <a className="nav-link" href="#generalInfo">
                      General Info
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#edu">
                      Education
                    </a>
                    <ul
                      style={{
                        paddingLeft: "10px",
                        marginBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <li>
                        <a className="nav-link" href="#school">
                          School
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="nav-link" href="#highSchool">
                          High School
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="nav-link" href="#college">
                          College
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="#hobbies">
                      Hobbies
                    </a>
                    <ul
                      style={{
                        paddingLeft: "10px",
                        marginBottom: "0",
                        listStyle: "none",
                      }}
                    >
                      <li>
                        <a className="nav-link" href="#music">
                          Listening Music
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="#timelapse">
                          Time-lapse Photography
                        </a>
                      </li>
                    </ul>
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
          <section id="generalInfo">
            <div>
              <h1>Anurag Baban Nalkar</h1>
              <p style={{ fontSize: "25px" }}>
                Hi there. My name is Anurag and this is my website. I'm
                currently a 19y/o student doing my B.E. in Computer Engineering.
              </p>
              <p></p>
            </div>
          </section>
          <hr />
          <br />

          <section id="edu">
            <h1>Education</h1>
            <p style={{ fontSize: "25px" }}>
              The nature of education has been varying, from extremely strict in
              school days to extremely chill in highschool. Have been through
              both online as well as offline modes of education.
            </p>
          </section>
          <br />

          <section id="school">
            <h1>School</h1>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                backgroundColor: "beige",
              }}
            >
              <div style={{ width: "30%", height: "100%" }}>
                <img
                  src="./images/dav.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: "70%", height: "100%" }}>
                <h2>D.A.V Public School, Airoli</h2>
                <p>2007-2019</p>
                <p style={{ fontSize: "25px" }}>
                  Completed pre-primary, primary and secondary education in this
                  school. Completed class 10th in 2019 with{" "}
                  <strong>94.4%</strong>.
                </p>
              </div>
            </div>
          </section>
          <br />

          <section id="highSchool">
            <h1>High School</h1>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                backgroundColor:"lightcyan",
              }}
            >
              <div style={{ width: "70%", height: "100%" }}>
                <h2>Brio Poddar International School, Badlapur</h2>
                <p>2019-2021</p>
                <p style={{ fontSize: "25px" }}>
                  Completed senior secondary education in this school. Completed
                  class 12 in 2021 with <strong>80.8%</strong> result.
                </p>
              </div>
              <div style={{ width: "30%", height: "100%" }}>
                <img
                  src="./images/brio.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </section>
          <br />

          <section id="college">
            <h1>College</h1>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                backgroundColor: "lavender",
              }}
            >
              <div style={{ width: "30%", height: "100%", margin:"0 10px" }}>
                <img
                  src="./images/fcrit.png"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: "70%", height: "100%", margin:"0 10px" }}>
                <h2>Fr. C. Rodrigues Institute of Technology, Vashi</h2>
                <p>2021-Present</p>
                <p style={{ fontSize: "25px" }}>
                  Currently studying in the branch
                  <strong> Computer Engineering </strong>
                  in 5th semester with <strong>8.88 CGPA</strong>.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />

          <section id="skills">
            <h1>Skills</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={skillBody}>C</p>
              <p style={skillBody}>Python</p>
              <p style={skillBody}>HTML/CSS</p>
              <p style={skillBody}>JavaScript</p>
              <p style={skillBody}>ReactJS</p>
              <p style={skillBody}>Java</p>
              <p style={skillBody}>MySQL Server</p>
            </div>
          </section>
          <hr />
          <br />

          <section id="hobbies">
            <h1>Hobbies</h1>
            <p style={{ fontSize: "25px" }}>
              Hobbies, for me, are the primary way to take my mind off studies
              and relax.
            </p>
          </section>
          <br />

          <section id="music">
            <h1>Listening Music</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <p style={{ fontSize: "25px" }}>
                  Music is one of the things that can turn any boring work into
                  a musical adventure. From lofi hip hop to elctronic, I listen
                  to a wide range of music that increases my productivity and
                  helps me get work done faster. <br />
                  <u>Feel free to recommend me any of your favourite songs.</u>
                </p>
              </div>
              <div
                style={{ minWidth: "640px", height: "100%", margin: "10px" }}
              >
                <div
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: "10px",
                    minWidth: "100%",
                    minHeight: "100%",
                    padding: "20px",
                  }}
                >
                  <h3>Some of my favourites</h3>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      className="musicBox"
                      href="https://www.youtube.com/watch?v=jfKfPfyJRdk"
                    >
                      Lofi Hip Hop <br />
                      -Lofi Girl
                    </a>
                    <a
                      className="musicBox"
                      href="https://www.youtube.com/watch?v=_wjpQG9e9xA"
                    >
                      Chaoz Fantasy <br />
                      -ParagonX9
                    </a>

                    <a
                      className="musicBox"
                      href="https://www.youtube.com/watch?v=fPO76Jlnz6c"
                    >
                      Gangsta's Paradise <br />
                      -Coolio
                    </a>

                    <a
                      className="musicBox"
                      href="https://www.youtube.com/watch?v=psuRGfAaju4"
                    >
                      Fireflies <br />
                      -Owl City
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />

          <section id="timelapse">
            <h1>Time Lapse Photography</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{ minWidth: "640px", height: "360px", margin: "10px" }}
              >
                <video
                  style={{ width: "100%", height: "100%" }}
                  src={VideoBg}
                  autoPlay
                  loop
                  muted
                ></video>
                <p style={{ fontSize: "25px" }}></p>
              </div>

              <div>
                <p style={{ fontSize: "25px", margin: "10px" }}>
                  Movement of clouds always fascinated me, and what initially
                  began as taking random images of sky, slowly turned into
                  capturing hour long time lapses almost everyday. Especially
                  during sunset in rainy season, the clouds give the sky an
                  artistic touch.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
