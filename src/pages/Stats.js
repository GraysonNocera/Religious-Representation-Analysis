import '../css/index.css';
import React from 'react';
import my_stats from "../images/my_stats.PNG";
import '../css/about.css';
  
function Stats() {
    return (
        <>
        <p className='header'>
            My Incredible Stats, The Best Stats Ever, No One Has Seen Stats Like These
        </p>
        <div className='column'>
            <img src={my_stats} alt="My Stats" className='image'></img>
        </div>
        </>
    );
}

export default Stats;