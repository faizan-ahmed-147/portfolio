import React from "react";
import "../componenetCss/Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">My Awesome Service</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="row">



          <div className="service__box__container">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Web Development</h1>
                <p className="p service__text p__color">
                  I Am A MErn Stack Developer 
                </p>
                <p className="p service__text p__color">
                  for building websites i also use material ui 
                </p>
                <p className="p service__text p__color">thats improve your website user interface.</p>
              </div>
            </div>
          </div>


          <div className="service__box__container">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Responsive design</h1>
                <p className="p service__text p__color">
                  I will make a full responsive design
                </p>
                <p className="p service__text p__color">
                  for creating web pages that look good on all devices
                </p>
                <p className="p service__text p__color">and have good user interface</p>
              </div>
            </div>
          </div>

          <div className="service__box__container">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Devops engineer</h1>
                <p className="p service__text p__color">
                  I am also doing devops
                </p>
                <p className="p service__text p__color">
                the tool i use for devops is Chef, Docker, Ansible, Kubernetes, Jenkins,
                </p>
                <p className="p service__text p__color">Nagios, Helm</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Service;
