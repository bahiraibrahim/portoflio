/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero flex">
        <div className="left-section ">
          <div className="parent-avatar flex">
            <img className="avatar" src="./code.PNG" alt="" />
            <div className="icon-verified" />
          </div>
          <h1 className="title">Web Developers</h1>
          <p>Front and Back end</p>
          <p className="sub-title">
            Code Group is an integrated team of front-end and back-end
            developers working together to develop web applications and other
            applications. The Front End is distinguished by its specialization
            in developing the graphical user interface (GUI), with which users
            interact directly, while the Back End specializes in developing
            systems and servers that deal with data and provide services to the
            Front End and users.
          </p>
          <div className="all-icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin-square"></div>
          </div>
        </div>
        <div className="right-section flex">
        <img className="right" src="./right.png"/>
        </div>
      </section>
    </>
  );
};

export default Hero;
