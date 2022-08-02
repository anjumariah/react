import React, {useEffect} from 'react'
import '../about/about.css'
import { fetchAbout } from '../../redux/about/aboutAction'
import { connect } from 'react-redux'


 function Speciality({fetchAbout,aboutCont}:any) {

  useEffect( () => {
    fetchAbout()
   
  }, [])
  // console.log(aboutCont.aboutCont,"==========================state in about*************************************----------------------");
  return (
    <div className='about-container'>  <div className='about-us'>

            {aboutCont.aboutCont && aboutCont.aboutCont.map((item: any )=> 
               (
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  </div>
              )
            )}
      
  </div></div>
  )
}
const mapStateToProps = (state:any) => {
  // console.log( state,"==========================state in specilaity ----------------------");
  
  return {
    aboutCont : state.aboutReducerItem.aboutData,

  }
  
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchAbout : () =>dispatch(fetchAbout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Speciality)
