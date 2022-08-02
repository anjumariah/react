// import React, { useEffect} from 'react'
// import { connect } from 'react-redux'
// import { fetchImage } from '../../redux'
// import '../about/about.css'
// import { Card } from '../card/card'
// import {fetchSpec} from '../../redux/speciality/specAction'


// type AboutProps = {
  
//   myImages:  any | String  
//   fetchImageData: () => any 
//   fetchSpecData: ()=> any
//   specContentState:any | string
// }

// type CardImgProps = {
//   title:string
//   id: number
//   imageItem: string
//   specReducerItem: any
//   content: any
//   specContentState:any | string
// }
  
// function About({myImages,fetchImageData,fetchSpecData,specContentState}:AboutProps) {
//   useEffect( () => {
//     fetchImageData()
//     fetchSpecData()
//   }, [])
// console.log(fetchSpecData,"----------            ------")
// console.log(fetchImageData,"*********           ***********");

// return (
//       <div className='about-container'> 
//           <div className='about-service'>
//              {
//               specContentState &&
//               specContentState.specCont &&
//               specContentState.specCont.map((specReducerItem:CardImgProps) =>{
//                 return(
//                 <div>
//                 <h2>{specReducerItem.title}</h2>
//                 <p>{specReducerItem.content}</p>
//                 </div>
//               )}) 
            
//              }
//           </div>
//           <div className='imported-card'>  
//             {myImages &&
//             myImages.imageData &&                        
//             myImages.imageData.map((imageItem:CardImgProps) => (              
//                   <Card key={imageItem.id} src= {imageItem} />              
//            )           
//            )}


//              </div>
       
//       </div>
//     )
  
// }

// const mapStateToProps = (state:CardImgProps) => {
//   console.log( state.specReducerItem,"==========================state in about----------------------");
//   console.log( state.imageItem," image state in about----------------------");
  
//   return {
//     myImages : state.imageItem,
//     specContetState : state.specReducerItem

//   }
// }

// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     fetchImageData : () => dispatch(fetchImage()),
//     fetchSpecData : () =>dispatch(fetchSpec())
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(About)
