import '../carousel/carousel.css'
import React, { PureComponent} from 'react'
import { image1,image2,image3 } from '../../assets/image/images';
 
// type Carouselprop = {
//   position:number
// }
// type CarouselimgProp = {
//   myArr: string[]
// }

export default class carousel extends PureComponent {
 
  state={
    myArr :[
      image3,image2,image1
    ],
    position:0    
  }


  onRightClick = () => {
    this.setState({     
      position:this.state.position -1 
    });
    
    console.log(this.state.position,"right")
    if(this.state.position===0){
      console.log(this.state.position,"bb")
      this.setState({
        position:this.state.myArr.length-1
      })
    }
    };
   
    

  onLeftClick = () =>{
     this.setState({
      position:this.state.position +1        
     });   
     console.log(this.state.position,"left")
     if(this.state.position===this.state.myArr.length-1){
      console.log(this.state.position,"aa ")
      this.setState({
       position:this.state.position=0
     });
    }  
  };

  render() {
    console.log(this.state.myArr.length)
    
    return (
      <div className='carousel'>
        <div className="carousel-container">      
      <button className="carousel-btn1" onClick={() =>this.onRightClick()}>&#10094;</button>
      <button className="carousel-btn2" onClick={() =>this.onLeftClick()} >&#10095;</button>
      <img  src={this.state.myArr[this.state.position]} alt="" />
      <div className='carousel-emergency'>
      <p className='emergency-para'>24*7 available emergency casuality department</p>
      <button className='call-button'>call for emergency **</button>
      </div>
      
       
  </div>
  </div>
    );
  }
}



