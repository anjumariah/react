import React, { useEffect } from 'react'
import { connect} from 'react-redux';
import { fetchHeader} from '../../redux';
import { useHistory } from 'react-router-dom';
import '../header/header.css'
import {getLogout} from "../../redux/loginform/loginAction";
// import {fetchAbout} from "../../redux/about/aboutAction";
// import { fetchSpec } from '../../redux/speciality/specAction';



 function Header({homeItems, fetchHeader,getLogout }) {

  useEffect(() => {
    fetchHeader()
    // fetchAbout()
    // fetchSpec()
  }, [])


  const history= useHistory() 
  
  const handleLogout = () => {
   getLogout()
   localStorage.clear()
  }

  const HandleSignUp = () =>{
    history.push("/signup");
  }

  return (
    <div className='header-container'>
        <div className='top-header'>
            <h5>feedback</h5>
            <h5>contact us</h5>
            <h5>need help?</h5> 
        </div>
       
        <div className='main-navbar'>
            <div className='navbar-logo'>
            <h1 className='hospital-name'>Marian Hospital</h1>
            </div>
            <div className='navbar-dropdown'>
            
            {homeItems &&
            homeItems.headerData &&

            homeItems.headerData.map((headerItem) => {
                
                   return <div className='navbar-icons' key={headerItem.id}>
                         
                             <button className='dropbtn' 
                             onClick={()=>history.push(headerItem.linkRef)
                            
                            } 
                             >
                             {headerItem.icon} 
                             </button>
                             
                             <div className='dropdown-menu'>
                              <button onClick={()=>history.push(headerItem.dropIconLink)}>
                              {headerItem.dropIcon}
                              </button>
                              {/* <a href="{header}" >{headerItem.dropIcon}</a> */}
                             </div>
                             </div>
                             
                            })}
                            <button className='logOutbtn' onClick={handleLogout} >LogOut</button>
                            <button className='signUpBtn'onClick={HandleSignUp}>SignuP</button>
            
            </div>



            <div className='navbar-search'>
                    <input  type="text" placeholder='search for doctors...' />
                    <button>search</button> 
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    homeItems : state.headerItem,
  }
  
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeader : () => dispatch(fetchHeader()),
    getLogout : () => dispatch(getLogout()),
    // fetchAbout : ()=>dispatch(fetchAbout()),
    // fetchSpec : ()=>dispatch(fetchSpec())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Header)
 