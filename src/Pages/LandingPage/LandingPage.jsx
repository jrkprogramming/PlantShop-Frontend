import React from 'react'
import Video from "../../vid/landingpagevideo.mp4";

const LandingPage = () => {
  return (
    <div className="video-container">
      <video src={Video} loop autoPlay muted />


      <div>hi</div>


      {/* <div className="main">
        <h2>Get off the beaten Path </h2>
        <h1>Find Adventure</h1>
        <p>
        Discover hidden gems, wherever you are. This App is the perfect way to explore different cities in a new way using maps to mark and upload your favorite "off the grid" places to share with others!{" "}
        </p>

        <div className="buttons">
          
            <a href="/login" >
          <button className="btn1">
              LOGIN
          </button>
            </a>

            <a href="/signup">
          <button className="btn2">
              SIGN-UP
          </button>
            </a>
        </div> */}
      {/* </div> */}
    </div>

  )
}

export default LandingPage