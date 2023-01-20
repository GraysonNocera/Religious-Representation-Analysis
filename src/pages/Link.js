import '../css/index.css';
import '../css/background.css'
import React from 'react';
  
function MyLink() {
    return (
        <div>
        <p className='header'>
            Play the Game for Yourself!
        </p>
        <a href="https://imangistudios.com/thegames/temple-run/" className='links'>Game Website</a>
        </div>
    );
}

export default MyLink;