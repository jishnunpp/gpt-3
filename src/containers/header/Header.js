import React from "react";
import "./header.css";
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="header section_padding">
      <div className="header_section_content">
        <h1 className="gradient__text">
          Lets Build Something Amazing with GPT-3 Open AI{" "}
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__content-input">
          <input type="email" placeholder="Enter Your Email Address" />
          <button type=" button">Get Startted</button>
        </div>
        <div className="header__content-people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>

        </div>
        </div>
        <div className="header__image">
          <img src={ai} alt="ai"/>
        </div>
      
    </div>
  );
};

export default Header;
