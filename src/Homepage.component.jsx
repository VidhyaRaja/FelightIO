import React from 'react';
import './Homepage.styles.scss';

const HomePage = () =>(
    <div className='homepage'>
        <div className='categories-container'>
            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>Java Full Stack</h1>
                    <span className='subtitle'>Know More</span>
                </div>
            </div>

            <div className='category-item'>
                <div className='content-holder'>
                    <h1 className='title'>Python</h1>
                    <span className='subtitle'>Know More</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;