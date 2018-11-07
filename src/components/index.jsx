import React, { Component } from 'react';
import { render } from 'react-dom';
 import WebpImage from 'webpimagereact/lib/webpImage';
//import WebpImage from '../components/index/webpImage'
class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgUrl:''
        }
       
    }
    componentDidMount(){    
        setTimeout(() => {
            this.setState({
                imgUrl:'http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/resize,m_fixed,h_100,w_100'
            })
        }, 2000);
    }
    render(){
        return <div>
            <WebpImage className="a" source={this.state.imgUrl}></WebpImage>
        </div>
    }

}



export default Index;