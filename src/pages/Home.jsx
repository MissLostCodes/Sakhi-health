import React from "react";
import Footer from "../components/Footer";
import Nurse from "../components/Nurse";
import "../styles.css"; 
function Home() {
    return (
        
      <div className="home-container">
        <div className="content">
          <div className="title">
          <h1 className="title">SAKHI</h1>
         
          </div>
          <div className="inform">
          <p className="tagline">
            <strong>&#x2764;&#xfe0f;Female Health Assistant</strong>
            <br />
            <br />
            <strong>&#x2764;&#xfe0f; Support rural women in maintaining menstrual health.</strong>
          </p>
          </div>
          </div>
        <div className="nurse">
        <Nurse />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Home;
