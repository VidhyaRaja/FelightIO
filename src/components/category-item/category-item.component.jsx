import React from 'react';
import './category-item.style.scss';

const CategoryItem = ({id, title, imageUrl}) =>(
    <div className='category-item' 
        style={{backgroundImage:`url(${imageUrl})`}}>
        <div className='content-holder'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Know More</span>
        </div>
    </div>
);

export default CategoryItem;

