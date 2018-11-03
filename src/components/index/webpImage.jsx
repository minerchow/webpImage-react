import React, { Component } from 'react';
import { render } from 'react-dom';

class WebpImage extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            source : props.source
        }
    }
    render(){
        return (
            <img src={this.state.source} width={this.props.width} height={this.props.height} className={this.props.className}/>
            
        );
    }
    componentDidMount(){
      
        var canvas = document.createElement('canvas');
        if (Boolean(canvas.getContext && canvas.getContext('2d'))) {
            if (canvas.toDataURL('image/webp').indexOf('data:image/webp') > -1) {
                if(this.state.source.indexOf('?x-oss-process=image')>-1){
                    this.setState({
                        source : this.state.source + "/format,webp"
                    })
                }else{
                    this.setState({
                        source : this.state.source + "?x-oss-process=image/format,webp"
                    })
                }
                
            }else{

            }
        }
    }
}

export default WebpImage;