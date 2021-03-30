import React, { Component } from 'react'
import './category-container.styles.scss';
import CategoryItem from '../category-item/category-item.component';

export default class CategoryContainerComponent extends Component {

    constructor(){
        super();
        this.state = {
            courseCategories :[]
        }
    }

    componentDidMount(){
        fetch('https://felight-io-ad939.web.app/course-category.json')
        .then(response=>response.json())
        .then(items => this.setState({courseCategories:items}));
    }

    render() {
        return (
            <div className='categories-container'>
                {
                    this.state.courseCategories.map(({id,title,imageUrl})=>(
                        <CategoryItem key={id}
                                    title={title}
                                    imageUrl={imageUrl}/>
                    ))
                }
            </div>
        )
    }
}
