import React, {Component} from 'react';
import './CSS-PageHome.css'
import {Carousel} from 'antd'



class PageHome extends Component{
    state={
        index: 0,
        direction: null
    }
    render(){
        return (
            <div>
                <Carousel autoplay>
                    <div>pic1</div>
                    <div>pic2</div>
                </Carousel>
                
            </div>
        )
    }
}

export default PageHome;