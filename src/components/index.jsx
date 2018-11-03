import React, { Component } from 'react';
import { render } from 'react-dom';
import WebpImage from './index/webpImage';
class Index extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        return <div>
            <WebpImage className="a" source="http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fixed,h_100,w_100"></WebpImage>
        </div>
    }

}



export default Index;