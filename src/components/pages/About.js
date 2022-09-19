import React from 'react';
import setCurrentPage from '../PortfolioContainer'
import contact from './images/contact.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import pfp from './images/pfp.png'

export default function About() {
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="bg-warning bg-gradient">
        <h1 className="text-center container py-3">About me!</h1>
        <div className="row">
            <img src={pfp} alt="profile picture" className="px-5 float-left col-sm-3 "></img>
            <div className="col-sm-6">
                <p className="float-right">
                    My name is Alex. In May 2020, I graduated from 
                    The College of New Jersey with a bachelor's degree in Finance and a minor in Philosophy. 
                    Motivated full stack web developer and decisive leader. Transitioning from accounting to a software engineering/developer role. 
                    Recently completed the Rutgers University full stack certificate. 

                </p>
                <br></br>
                <p className="float-right">
                A critical thinker and efficient problem solver with over two years of diverse professional experience. 
                Most recently have made an interactive MERN application within a team of four to help readers interact and share books online.                 </p>
                <br></br>
                <p className="float-right">
                Passionate about continuous improvement of front end/back end skills and professional growth. 
                Disciplined, objective focused, and detail oriented work ethic when handling projects. 
                Excited and prepared to be a valuable asset to a strong team.
                </p>
            </div>
        </div>
        <br>
        </br>
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
