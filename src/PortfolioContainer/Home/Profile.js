import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/share/1YihksGzuy/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/HarshaFdo">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instergram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/harshafdo/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Harsha</span>
            </span>
          </div>
          <div className="profile-details-role">
            {" "}
            <h1>
              {" "}
              <Typewriter
                words={[
                  "Enthusiastic Dev",
                  "Full Stack Developer",
                  "DevOps Dev",
                  "Cross Platform Dev",
                  "React/React Native Dev",
                ]}
                loop={Infinity}
                cursor={true} // Added cursor
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <span className="profile-role-tagline">
              Knack of building application with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Theekshana_Fernando-Resume.pdf"
              download="Harsha Theekshana_Fernando-Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
