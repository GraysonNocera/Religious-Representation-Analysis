import React from "react";
import temple_run from "../images/temple_run.png";
import "../css/about.css";

function About() {
    return (
        <>
        <div>
        <p className='header'>
            About this Presentation
        </p>
        <p className='body'>
            I chose this modality since my example of media is Temple Run. Because I chose a video game to analyze for this assignment, I figured that a website detailing my findings would work well with the game itself. I imagine that my audience is any avid fan of Temple Run that is interested in its story and how it portrays religion. 
        </p>
        </div>
        <div className='column'>
            <img src={temple_run} alt="Temple Run Icon" className='image'></img>
        </div>
        </>
    );
}

export default About;