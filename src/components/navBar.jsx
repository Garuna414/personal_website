import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import Resume from "../assets/resume.pdf";

function NavBar() {
  return (
    <nav
      className="navbar-expand-lg nav-underline bg-primary border-body"
      data-bs-theme="dark"
    >
      <nav className="navbar navbar-expand-lg bg-body-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            AnuragNalkar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-1">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link" to="/about">
                  About Me
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link" to="/contact">
                  Connect
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href={Resume} download="resume.pdf">
                  Download Resume
                </a>
              </li>
              {/*<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/school">
                      School
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/highSchool">
                      High School
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/college">
                      College
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/college">
                      College
                    </NavLink>
                  </li>
                </ul>
  </li>*/}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Find
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
