import React from 'react'
import  '../card/card.css'


type cardprops = { 
  src: any | string 
  key:number  
}
// type Srcprops = {
//   im:React.ImgHTMLAttributes<HTMLImageElement>
//   cardTitle:string 
//   cardDescription: string
// }

export const Card  =(props:cardprops ) => {
  return (
    <div className='card-container'>
        <div className="card">                
                <img className="card-card" src={props.src.im} alt="error occured" />               
                   <div className="paracontainer">
                    <h3 >{props.src.cardTitle}  </h3>
                    <p>{props.src.cardDescription} </p>
                    <button className='card-btn'>
                        <a href={'card'}>readmore</a>
                    </button>
                 </div>                  
        </div>
    </div>
  )
}