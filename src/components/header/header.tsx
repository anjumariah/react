import React, { useEffect } from 'react'
import { connect} from 'react-redux';
import { fetchHeader } from '../../redux';
import { useHistory } from 'react-router-dom';
import '../header/header.css'
import {getLogout} from "../../redux/loginform/loginAction"


   type HeaderProps = {
     homeItems:any
     fetchHeader(): (dispatch: any) => void
     getLogout():(dispatch:any) => void
    
     
   }



   type HeaderItemProp = {
     id: number
     icon:string 
     dropIcon:string 
    linkRef:string
    handleogout:any
  

   }
   type StateProp = {
    headerItem: string
   }

  




 function Header({homeItems,fetchHeader,getLogout}:HeaderProps) {
  useEffect(() => {
    fetchHeader()
  }, [fetchHeader])
  const history= useHistory() 
  
  const handleLogout = () => {
   getLogout()
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

            homeItems.headerData.map((headerItem:HeaderItemProp) => {
                
                   return <div className='navbar-icons' key={headerItem.id}>
                         
                             <button className='dropbtn' 
                             onClick={()=>history.push(headerItem.linkRef)} 
                             >
                             {headerItem.icon} 
                             </button>
                             
                             <div className='dropdown-menu'>
                              <a href="{header}" >{headerItem.dropIcon}</a>
                             </div>
                             </div>
                             
                            })}
                            <button className='logOutbtn' onClick={handleLogout} >LogOut</button>
            
            </div>



            <div className='navbar-search'>
                    <input  type="text" placeholder='search for doctors...' />
                    <button>search</button> 
            </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state:StateProp) => {
  return {
    homeItems : state.headerItem,
  }
  
  
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    fetchHeader : () => dispatch(fetchHeader()),
    getLogout : () => dispatch(getLogout()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Header)
 