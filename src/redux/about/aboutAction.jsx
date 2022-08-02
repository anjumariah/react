import axios from "axios"
import { FETCH_ABOUTDATA_REQUEST,FETCH_ABOUTDATA_SUCCESS, FETCH_ABOUTDATA_FAILURE, FETCH_ABOUT_TOKEN } from "./aboutType"

 

export const fetchAboutDataRequest = () => {
    return {
        type : FETCH_ABOUTDATA_REQUEST
    }
}

    const fetchAboutDataSuccess =( aboutData)=> {
    return {
        type :FETCH_ABOUTDATA_SUCCESS,
        payload : aboutData
    }
}

 const fetchAboutDataFailure = (error) => {
    return {
        type : FETCH_ABOUTDATA_FAILURE,
        payload : error
}
}


export const fetchAbout = () => {
   const token= JSON.parse(localStorage.getItem("token"))
   console.log(token) 
   if(token){
    
    return (dispatch) => {
        dispatch(fetchAboutDataRequest)
        axios({
            method:'get',
            url:'http://localhost:3005/content/about',
            headers:{Authorization:`'anju ${token}`}
        })
        .then((response) => {
        //   console.log(response,"---------about response in header----------");
          const aboutData =response.data;
          dispatch(setAbout);
        //   console.log(aboutData,"----about--data----");
          
          
          dispatch(fetchAboutDataSuccess(aboutData))
          
        })
        .catch (error => {
            const errorMsg = error.message
            dispatch(fetchAboutDataFailure(errorMsg))
        })
    }
   }  


}

export const setAbout =(data)=>{
    return{
        type:FETCH_ABOUT_TOKEN,
        payload:data
    }
}