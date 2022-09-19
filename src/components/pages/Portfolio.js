import React from 'react';
import contact from './images/contact.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import DMD from './images/samplegif.gif'
import WTM from './images/WTM.png'
import SNAPI from './images/SocialNetworkAPI.png'
import Note from "./images/NoteTaker.png"
import Weather from "./images/Weather.png"
import ReadMe from "./images/ReadMe.png"
import BR2 from "./images/BR2.png"

export default function Portfolio() {
  return (
    <div className="bg-warning bg-gradient">
      <h1 className="text-center py-3">Portfolio Page</h1>
      <h5 className="text-center"> 
        Feel free to browse a few of my repositories by clicking the images below!
      </h5>
      <br></br>
      <div className="text-center container">
        <ul class="row">
          <li className="list-unstyled col">
              <h3>What's That Movie?</h3>
              <br></br>
              <a href="https://alexpap1.github.io/Whats-That-Movie/">
                  <img className="col-sm-12" src={WTM} alt="What's That Movie?"></img>
                </a>
          </li>
          <br></br>
          <li className="list-unstyled col">
              <h3>Dog Meet Dog</h3>
              <br></br>
              <a href="https://dog-meet-dog-final.herokuapp.com/">
                <img className="col-sm-12" src={DMD} alt="Dog Meet Dog"></img>
                </a>
          </li>
        </ul>
        <ul class="row">
        <li className="list-unstyled col">
              <h3>Better Reads 2.0</h3>
              <br></br>
              <a href="https://better-reads-2.herokuapp.com/">
                <img className="col-sm-12" src={BR2} alt="Better Reads 2.0"></img>
                </a>
          </li>
          <br></br>
          <li className="list-unstyled col">
              <h3>Social Network API</h3>
              <br></br>
              <a href="https://github.com/AlexPap1/social-network-api">
                <img className="col-sm-12" src={SNAPI} alt="Social Network API"></img>
                </a>
          </li>
          <br></br>
        </ul>
        <ul class="row">
          <br></br>
          <li className="list-unstyled col">
              <h3>Weather Dashboard API</h3>
              <br></br>
              <a href="https://alexpap1.github.io/Weather-Dashboard/">
                <img className="col-sm-12" src={Weather} alt="Weather Dashboard"></img>
                </a>
          </li>
          <br></br>
          <li className="list-unstyled col">
              <h3>Note Taker</h3>
              <br></br>
              <a href="https://note-taker-alexpap01.herokuapp.com/">
                <img className="col-sm-12" src={Note} alt="Note Taker"></img>
                </a>
          </li>
        </ul>
      </div>
      <section id="contact-me" class="contact-me">
        <div class="text-center">
            <img src={contact} alt="Contact Stock Photo"
            width="100px"
            height="100px"></img>
        </div>
        <h2 class="contact-info text-center"> Contact and Connect with Me! </h2>
        </section>
        <br></br>
        <div className="text-center">
            <ul className="text-center d-inline">
                <li className="text-center d-inline">
                    <img src={email} alt="EmailIcon"
                    width="110"
                    height="110"
                    className="d-inline"></img>
                </li>
                <li className="text-center d-inline">
                    <img src={linkedin} alt="LinkedInIcon"
                    width="100"
                    height="100"
                    className="d-inline"></img>
                </li>
                <li className="text-center d-inline">
                    <img src={phone} alt="PhoneIcon"
                    width="100"
                    height="100"
                    className="d-inline px-2"></img>
                </li>
            </ul>
        </div>
        <ul className="text-center d-inline">
           <li>
               Email: <a href="mailto:arpappagallo@gmail.com">arpappagallo@gmail.com</a>
           </li>
           <li>
                LinkedIn: <a href= "https://www.linkedin.com/in/alex-pappagallo-3630781a2/" >My LinkedIn Profile</a>
            </li>
           <li>
                Phone: <a href="tel:(732)-610-6636">(732)-610-6636</a>
           </li>
        </ul>
    </div>
  );
}
