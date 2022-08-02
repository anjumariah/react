import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchImage } from '../../redux'
import '../about/about.css'
import { Card } from '../card/card'
import {fetchSpec} from '../../redux/speciality/specAction'


type AboutProps = {  
  myImages:  any  
  specCont:any | string 
  fetchImageData: () => any 
  fetchSpecData: ()=> any
  
  
}

type CardImgProps = {
  title:string
  id: number
  imageItem:any
  specReducerItem: any
  content: any
  item:any
  imageData:any


}
  
function About({myImages,specCont,fetchImageData,fetchSpecData}:AboutProps) {
  useEffect( () => {
    fetchImageData()
    fetchSpecData()
  }, [])
  console.log(specCont.specCont)
  console.log(myImages.cardControler);
  
// console.log(fetchSpecData,"----------            ------")
// console.log(fetchImageData,"*********           ***********");
// console.log(specCont,"==========================state in about stores variable----------------------");
return (
      <div className='about-container'> 
          <div className='about-service'>
            {specCont.specCont && specCont.specCont.map((item: CardImgProps )=> {
              return (
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  </div>
              )
            })}

             {/* {
              specCont.specData.specData.array.forEach((specReducerItem:any) => {
                <h2>{specReducerItem.title}</h2>
              })
             } */}
          </div>
          <div className='imported-card'>  
            { myImages.cardControler && myImages.cardControler.map((item:CardImgProps) => (              
                  <Card key={item.id} src= {item} />              
           )           
           )}


             </div>
       
      </div>
    )
  
}

const mapStateToProps = (state:CardImgProps) => {
  // console.log( state.specReducerItem,"==========================state in about----------------------");
  // console.log( state.imageItem.imageData," CARD from STATE----------------------");
  
  return {
    myImages : state.imageItem.imageData ,
    specCont : state.specReducerItem.specData,

  }
  
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchImageData : () => dispatch(fetchImage()),
    fetchSpecData : () =>dispatch(fetchSpec())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)
