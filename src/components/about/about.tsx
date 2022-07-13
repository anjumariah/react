import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchImage } from '../../redux'
import '../about/about.css'
import { Card } from '../card/card'


type AboutProps = {
  myImages:  any | String
  fetchImageData: () => Function  
}

type CardImgProps = {
  id: number
  imageItem: string
}
  
function About({myImages,fetchImageData}:AboutProps) {
  useEffect( () => {
    fetchImageData()
  }, [fetchImageData])

return (
      <div className='about-container'> 
          <div className='about-service'>
              <h2>Our Specialities</h2>
              <p>through our 25+ specialities, we provide in-depth expertise in the spectrum of advance medical and surgical interventions.
                 Our specialities are integrated to provide a seamless experience.
                We have some of the best specialty doctors from arround the world,
                they bring years of experience and offer evidence based treatment to ensure the best care for you.
                one of the best hospital in Calicut, stresses on improving the health of the community by setting up the standard of excellence in medical education, research and clinical care. 
                Aiming a patient- centric care, the hospital is utilizing enhanced lifesaving technologies for leveraging the level of cure.</p>
          </div>
          <div className='imported-card'>  
            {myImages &&
            myImages.imageData &&                        
            myImages.imageData.map((imageItem:CardImgProps) => (              
                  <Card key={imageItem.id} src= {imageItem} />              
           )           
           )}


             </div>
       
      </div>
    )
  
}

const mapStateToProps = (state:CardImgProps) => {
  return {
    myImages : state.imageItem
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchImageData : () => dispatch(fetchImage())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(About)
// export default About