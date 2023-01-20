import React from "react";
import hindu_temple from "../images/hindu_temple.jpeg"
import aztec_temple from "../images/aztec_temple.jpeg"
import aztec_serpent from "../images/aztec_serpent.svg"
import hindu_serpent from "../images/hindu_serpent.jpeg"
import "../css/connection.css"

function Connection() {
    return (
        <>
        <div>
        <p className='header'>
            Connection to Religion
        </p>
        <p className='body'>
            In the game, the explorer steals a golden idol from an Aztec temple in a swamp. As a result, swarms of Evil Demon Monkeys (this is the technical term) chase the explorer down. While we did not study Aztec religion or any other religion of the indigenous peoples of America, there are striking similarities between those religions and Hinduism. For example, both religions include multiple deities that are worshiped in similar ways. Adherents to these religions would often perform elaborate ceremonies to worship their gods or ask for assistance. In Hinduism, this is called puja, or worship of a deity. They include similar stories like their creation stories and similar imagery like that of serpents. Below, I compare a Hindu temple with an Aztec temple. There are obvious similarities in the pyramid shape of each. Below that, Lord Vishnu is depicted on the left and the Aztec’s Quetzalcoatl is pictured on the right. In both pictures, serpent imagery is present.        </p>
        </div>
        <div className="row">
            <div className="column">
                <img src={hindu_temple} alt="Hindu Temple" className="image-left"></img>
            </div>
            <div className="column">
                <img src={aztec_temple} alt="Aztec Temple" className="image-right"></img>
            </div>
        </div>
        <div className="row">
            <div className="column">
                <img src={hindu_serpent} alt="Hindu Serpent" className="image-left"></img>
            </div>
            <div className="column">
                <img src={aztec_serpent} alt="Aztec Serpent" className="image-right"></img>
            </div>
        </div>
        </>
    );
}

export default Connection;