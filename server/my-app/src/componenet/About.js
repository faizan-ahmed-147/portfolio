import React from "react";
import "../componenetCss/About.css";
import aboutImg from "../img/about-3.jpg";
import { Link } from "react-router-dom";

function About() {

  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Full Stack Developer | Web app Developer | Mern Stack Developer | React Website | Node JS
              </p>
              <p className="about__text p__color">
                Hi,

                I am a professional  Full stack Web developer, Mern stack developer and will build react websites and webapps.
              </p>
              <p className="about__text p__color">
                This Website is all about developing Website and web app using MERN Stack (MongoDB, EXPRESS, REACT/REACTJS, NODEJS). I can convert your idea into a desired Web application.
              </p>
              <p className="about__text p__color">
                Services which I can provide: <br />
                1. Single Page Applications (SPAs) with React/Reactjs and Reduxjs <br />
                2. Custom web app development, CRUD apps <br />
                3. Backend development with Nodejs, JWT authentication, APIs, and CMS <br />
                4. Rest API development <br />
                5. Admin panels and dashboards <br />
                6. Bug Fixes in Nodejs and Reactjs <br />
                7. Others as per your requirements <br />
              </p>
              <p className="about__text p__color">
                My work scope includes: <br />
              </p>
              <p className="about__text p__color">
              Frontend: <br />
                1. Reactjs 
                2. HTML/CSS 
                3. React Bootstrap
                4. Material UI 
      
              </p>
              <p className="about__text p__color">
               Backend: <br />
               1. Nodejs
                2. Express.js
                3.MongoDB
              </p>
              <p className="about__text p__color">
              Database: <br />
                1. MongoDB
              </p>
              <p className="about__text p__color">
              Deployment: <br />
                1. Heroku 
                2. Github 
                3. Netlify 
                
              </p>
              <p className="about__text p__color">
              Kindly contact me first. May need to have a meeting session. <br />
              Thank you
              </p>
               
              <div className="about__button d__flex align__items__center">
                <Link to={require('../CV.pdf')} target="_blank">
                  <button className="about btn pointer">Download Cv </button>
                </Link>
                <Link to="/Contact">
                  <button className="about btn pointer">Hire Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
