import React, { Component } from 'react';
import { render } from 'react-dom';

class WebpImage extends Component {
    constructor(props){
        super(props);
       // console.log(this.props)
        this.state = {
            source : ''
        }
    }
    render(){
        console.log(this.state.source)
        let imgSource;
        if(this.state.source){
            console.log(11111)
            imgSource = <img src={this.state.source} width={this.props.width} height={this.props.height} className={this.props.className}/>
        }else{
            console.log(222222)
            imgSource = ''
        }
        return <div>{imgSource}</div>
        
    }
    componentWillReceiveProps(nextProps) {
        // ...
        console.log(nextProps)
        if(nextProps){
            this.convertWebP(nextProps)
        }
        
    }
    componentDidMount(){
        console.log(this.props)
        this.convertWebP(this.props)
       
    }
    convertWebP(nextProps){
        var canvas = document.createElement('canvas');
        if (Boolean(canvas.getContext && canvas.getContext('2d'))) {
            if (canvas.toDataURL('image/webp').indexOf('data:image/webp') > -1 && nextProps.source) {
                if(nextProps.source.indexOf('?x-oss-process=image')>-1){
                    this.setState({
                        source : nextProps.source + "/format,webp"
                    })
                }else{
                    this.setState({
                        source : nextProps.source + "?x-oss-process=image/format,webp"
                    })
                }
                
            }else{

            }
        }
    }
}

export default WebpImage;