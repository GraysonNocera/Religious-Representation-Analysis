import '../css/index.css';
import React from 'react';
import golden_idol from "../images/golden_idol.jpg";
import evil_demon_monkey from "../images/evil_demon_monkey.jpg";
  
function Analysis() {
    return (
        <>
        <div>
        <p className='header'>
            Analysis of Temple Run's Religious Representation
        </p>
        <p className='body'>
            The fact that Evil Demon Monkeys run out of a religious temple is not a great look. It feeds into certain harmful stereotypes. After playing this game, someone may think that all gods are out to chase you down and kill you or that temples are never peaceful, tranquil places. Furthermore, the only image of supernatural beings in this game are the Evil Demon Monkeys that have skulls for faces and viciously chase down humans. Again, this contributes to a perception of gods in religion that is not completely accurate. Furthermore, the image of a golden idol to represent a deity is a stereotypical example of the representation of a god in religion. However, this fails to fully encompass how gods are represented (or not represented) in religion and could certainly offend those who feel that their religion or culture is being appropriated by this imagery. The idol is also just frightening to look at, which is certainly not representative of all images of gods in different religions. Another point of contention is that the temple itself is incredibly run down: the walls are cracked, broken, and mossy. This could contribute to the idea that religion is only for ancient people and that its significance is largely gone. Of course, we must give this game some slack, as it was created by a couple software developers that just wanted to make a fun mobile game. Below are depicted the golden idol (left) and the Evil Demon Monkeys (right).        </p>
        </div>
        <div className='row'>
            <div className='column'>
                <img src={golden_idol} alt="Golden Idol" className='image-left'></img>
            </div>
            <div className='column'>
                <img src={evil_demon_monkey} alt="Evil Demon Monkey" className='image-right'></img>
            </div>
        </div>
        </>
    );
}

export default Analysis;