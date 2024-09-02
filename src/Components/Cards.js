import React from 'react';
import './Cards.css';
import image1 from './Assets/img1.jpg';
import image2 from './Assets/img2.jpg';
import image3 from './Assets/img3.jpg';
import image4 from './Assets/img4.jpg';

function Cards() {
    return (
        <div class="cards">
            <div className='cd'>
                <img src={image1} class="card" alt='image1' />
                <p class="text1">The Great YouTube Clone Experiment</p>
                <p className='text2'>Channel 1</p>
            </div>
            <div className='cd'>
                <img src={image2} class="card" alt='image2' />
                <p class="text1">Clone Wars: The YouTube Edition</p>
                <p className='text2'>Channel 2</p>
            </div>
            <div className='cd'>
                <img src={image3} class="card" alt='image3' />
                <p class="text1">StreamIt: Making a YouTube Clone</p>
                <p className='text2'>Channel 3</p>
            </div>
            <div className='cd'>
                <img src={image4} class="card" alt='image4' />
                <p class="text1">TubeVibes: Crafting a Next-Gen Platform</p>
                <p className='text2'>Channel 4</p>
            </div>
        </div>

        
    );
}

export default Cards;
