# 使用文档
## 下载
### npm install @gaodun.com/webp-react --save



## 示例代码
``` jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
 import WebpImage from '@gaodun.com/webp-react/lib/webpImage';
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
        return (<div>
            <WebpImage className="a" source={this.state.imgUrl}></WebpImage>
        </div>)
    }

}



export default Index;

```


### 参数 

#### source 需要转webp格式的图片cdn地址（目前支持阿里云oss）
#### className 定义图片的class名字
#### width 图片宽度
#### height 图片高度