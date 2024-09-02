import React from 'react';
import './Cards1.css';
import image5 from './Assets/img5.jpg';
import image6 from './Assets/img6.jpg';
import image7 from './Assets/img7.jpg';
import image8 from './Assets/img8.jpg';

function Cards() {
    return (
        <div class="cards1">
            <div className='cd1'>
                <img src={image5} class="card1" alt='image1' />
                <p class="title1">MyTube: Reinventing Video Streaming</p>
                <p className='channel1'>Channel A</p>
            </div>
            <div className='cd1'>
                <img src={image6} class="card1" alt='image2' />
                <p class="title1">Clone Wars: The YouTube Edition</p>
                <p className='channel1'>Channel B</p>
            </div>
            <div className='cd1'>
                <img src={image7} class="card1" alt='image3' />
                <p class="title1">TubeVibes: Crafting a Next-Gen Platform</p>
                <p className='channel1'>Channel C</p>
            </div>
            <div className='cd1'>
                <img src={image8} class="card1" alt='image4' />
                <p class="title1">The Great YouTube Clone Experiment</p>
                <p className='channel1'>Channel D</p>
            </div>
        </div>
        
    );
}

export default Cards;
