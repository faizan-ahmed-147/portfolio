import React from "react";
import "../componenetCss/Home.css";
import homebg from "../img/about-3.jpg"


function Home() {

  return (
    <>
      {/* HOME CONTENT */}
      <div className="home-info component__space" id="home">
      <div className="container">
        <div className="home__content">
          <div className="home__meta">
            <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
            <h2 className="home__text pz__10">Hi, I’m Faizan Ahmed</h2>
            <h4 className="home__text sweet pz__10">MERN STACK Developer</h4>
            <h6 className="home__text pz__10">Full Stack Developer | Web app Developer | Mern Stack Developer | React Website | Node <br /> Hi, I am a professional Full stack Web developer,<br /> Mern stack developer and will build react websites and webapps.</h6>
            
          </div>

          <img src={homebg} alt="" srcset="" />

        </div>
      </div>
      </div>


    </>
  );
}

export default Home;
