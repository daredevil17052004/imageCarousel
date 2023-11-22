import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super()
  
    this.state = {
        count : 0
    }
  }

  forward = () =>{
    if(this.state.count < 2){
        this.setState({count:this.state.count += 1})
    } else{
      this.setState({count: this.state.count = 0})
    }
  }

  backward = () =>{
    if(this.state.count>0){
        this.setState({count:this.state.count -=1})
    } else{
      this.setState({count:this.state.count = 2})
    }
  }

  render(){    
    return(
        <div className="body">
            <div className="main">
                <div onClick={this.backward} className="arrl"><ArrowBackIosIcon/></div>
                <div className="name">
                    <div className="imgs">
                        <img src={images[this.state.count].img} />
                        <div className="center">
                          {images[this.state.count].title}
                        </div>
                        <div className="sub">
                          {images[this.state.count].subtitle}
                        </div>
                    </div>
                </div>
                <div onClick={this.forward} className="arrr"><ArrowForwardIosIcon/></div>
            </div>
        </div>
    )
  }
}

export default Carousel;