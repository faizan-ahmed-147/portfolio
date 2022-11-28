import React from "react";
import "../componenetCss/Project.css";
import Project1 from '../img/portfolio-1.png';
import Project2 from '../img/portfolio-2.png';
import Project3 from '../img/portfolio-3.png';
import Project4 from '../img/portfolio-4.png';
import Project5 from '../img/portfolio-5.png';
import Project6 from '../img/portfolio-6.png';

function Project() {

    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="project__box__container">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project6} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">MERN STACk</h4>
                                <a href="https://mern-stack-fa.herokuapp.com/" target="_blank" className="project__btn">View Project</a>
                                <a href="https://github.com/faizan-ahmed-147/mern-stack" target="_blank"className="project__btn">View Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="project__box__container">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Video Chat App</h4>
                                <a href="https://www-group-app.netlify.app" target="_blank" className="project__btn">View Project</a>
                                <a href="https://github.com/faizan-ahmed-147/video-chat" target="_blank"className="project__btn">View Code</a>
                            </div>
                        </div>
                    </div>


                    <div className="project__box__container">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project5} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">TEXt UTILS</h4>
                                <a href="https://www-text-utils.netlify.app/" target="_blank" className="project__btn">View Project</a>
                                <a href="https://github.com/faizan-ahmed-147/text-utils" target="_blank"className="project__btn">View Code</a>
                            </div>
                        </div>
                    </div>


                    <div className="project__box__container">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Snake Game</h4>
                                <a href="https://www-snake-game.netlify.app" target="_blank" className="project__btn">View Project</a>
                                <a href="https://github.com/faizan-ahmed-147/snake-game" target="_blank"className="project__btn">View Code</a>
                            </div>
                        </div>
                    </div>


                    <div className="project__box__container">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Calculator</h4>
                                <a href="https://www-calculator.netlify.app" target="_blank" className="project__btn">View Project</a>
                                <a href="https://github.com/faizan-ahmed-147/calculator" target="_blank"className="project__btn">View Code</a>
                            </div>
                        </div>
                    </div>


                    <div className="project__box__container">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Development</h5>
                                <h4 className="project__text">Analog Clock</h4>
                                <a href="https://analog-clockapp.netlify.app" target="_blank" className="project__btn">View Project</a>
                                <a href="https://github.com/faizan-ahmed-147/analog-clock" target="_blank"className="project__btn">View Code</a>
                            </div>
                        </div>
                    </div>

            



                    {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

                </div>
            </div>
        </div>
    );
}

export default Project;
