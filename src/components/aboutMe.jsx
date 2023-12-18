import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./hover.css";
import VideoBg from "../assets/timelapse.mp4";
import dav from "../images/dav.png";
import brio from "../images/brio.png";
import fcrit from "../images/fcrit.png";

function AboutMe() {
  const skillBody = {
    display: "flex",
    flexDirection: "column",
    width: "10rem",
    height: "4rem",
    backgroundColor: "lightgray",
    borderRadius: "1.875rem",
    padding: "0.625rem",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "1.25rem",
    marginBottom: "0",
  };

  return (
    <div
      className="container-fluid"
      style={{padding: "0" }}
    >
      <div className="row" style={{ width: "100%", margin: "0" }}>
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
              <p style={{ fontSize: "1.563rem", color: "white" }}>
                Page contents:
              </p>
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
                        paddingLeft: "0.625rem",
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
                        paddingLeft: "0.625rem",
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
            height: "calc(100vh - 3.563rem)",
            scrollBehavior: "smooth",
            backgroundColor: "beige",
          }}
        >
          <section id="generalInfo">
            <div>
              <h1>Anurag Baban Nalkar</h1>
              <p style={{ fontSize: "1.563rem" }}>
                19y/o student doing my B.E. in Computer Engineering from Fr. C.Rodrigues Institute of Technology. Currently learning about ReactJS and REST APIs aspiring to become a full stack web developer.
              </p>
              <p></p>
            </div>
          </section>
          <hr />
          <br />

          <section id="edu">
            <h1>Education</h1>
            <p style={{ fontSize: "1.563rem" }}>
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
                padding: "0.625rem",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  maxWidth: "22.859rem",
                  maxHeight: "22.859rem",
                  marginBottom: "1rem 0",
                }}
              >
                <img
                  src={dav}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: "50rem", height: "100%" }}>
                <h2>D.A.V Public School, Airoli</h2>
                <p>2007-2019</p>
                <p style={{ fontSize: "1.563rem" }}>
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
              className="eduIcons"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                padding: "0.625rem",
                // backgroundColor: "lightcyan",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
                            <div
                style={{
                  maxWidth: "20rem",
                  maxHeight: "20rem",
                  marginBottom: "1rem 0",
                }}
              >
                <img
                  src={brio}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: "56rem", height: "auto" }}>
                <h2>Brio Poddar International School, Badlapur</h2>
                <p>2019-2021</p>
                <p style={{ fontSize: "1.563rem" }}>
                  Completed senior secondary education in this school. Completed
                  class 12 in 2021 with <strong>80.8%</strong> result.
                </p>
              </div>
            </div>
          </section>
          <br />

          <section id="college">
            <h1>College</h1>
            <div
              className="eduIcons"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                padding: "0.625rem",
                // backgroundColor: "lavender",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  maxWidth: "20rem",
                  maxHeight: "20rem",
                  minWidth: "20rem",
                  minHeight: "20rem",
                  marginBottom: "1rem 0",
                }}
              >
                <img
                  src={fcrit}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ width: "55rem", height: "auto" }}>
                <h2>Fr. C. Rodrigues Institute of Technology, Vashi</h2>
                <p>2021-Present</p>
                <p style={{ fontSize: "1.563rem" }}>
                  Currently studying in the branch
                  <strong> Computer Engineering </strong>
                  in 5th semester with <strong>8.88 CGPA</strong>.
                </p>
              </div>
            </div>
          </section>
          <hr />
          <br />

          <div id="skills">
            <h1>Skills</h1>
            <div
              className="eduIcons"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <p style={skillBody}>C</p>
              <p style={skillBody}>Python</p>
              <p style={skillBody}>HTML/CSS</p>
              <p style={skillBody}>JavaScript</p>
              <p style={skillBody}>ReactJS</p>
              <p style={skillBody}>Java</p>
              <p style={skillBody}>MySQL Server</p>
            </div>
          </div>
          <hr />
          <br />

          <section id="hobbies">
            <div style={{ padding: "0.625rem" }}>
              <h1>Hobbies</h1>
              <p style={{ fontSize: "1.563rem" }}>
                Hobbies, for me, are the primary way to take my mind off studies
                and relax.
              </p>
            </div>
          </section>
          <br />

          <section id="music">
            <h1>Listening Music</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "0.625rem",
                padding:"0.625rem"
              }}
            >
              <div style={{ width: "35rem" }}>
                <p style={{ fontSize: "1.563rem" }}>
                  Music is one of the things that can turn any boring work into
                  a musical adventure. From lofi hip hop to elctronic, I listen
                  to a wide range of music that increases my productivity and
                  helps me get work done faster. <br />
                  <u>Feel free to recommend me any of your favourite songs.</u>
                </p>
              </div>
              <div
                style={{
                  maxWidth: "40rem",
                  height: "100%"
                }}
              >
                <div
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: "0.625rem",
                    minWidth: "100%",
                    minHeight: "100%",
                    padding: "1.25rem",
                  }}
                >
                  <h3>Some of my favourites</h3>
                  <br />
                  <div className="musicContainer"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      flexWrap: "wrap",
                      alignItems: "center",
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "0.625rem",
              }}
            >
              <div
                className="videoContainer"
                style={{ width: "40rem", height: "auto", margin: "0.625rem" }}
              >
                <video
                  style={{ width: "100%" }}
                  src={VideoBg}
                  autoPlay
                  loop
                  muted
                ></video>
                <p style={{ fontSize: "1.563rem" }}></p>
              </div>

              <div
                className="videoText"
                style={{ maxWidth: "35.45rem", width: "auto" }}
              >
                <p style={{ fontSize: "1.563rem", margin: "0.625rem" }}>
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
