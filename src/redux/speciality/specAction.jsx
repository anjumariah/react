import axios from "axios"
import { FETCH_SPECDATA_REQUEST,FETCH_SPECDATA_SUCCESS,FETCH_SPECDATA_FAILURE,FETCH_ABOUT_TOKEN } from "./specType"

 

export const fetchSpecDataRequest = () => {
    return {
        type : FETCH_SPECDATA_REQUEST
    }
}

    const fetchSpecDataSuccess =( specData)=> {
    return {
        type :FETCH_SPECDATA_SUCCESS,
        payload : specData
    }
}

 const fetchSpecDataFailure = (error) => {
    return {
        type : FETCH_SPECDATA_FAILURE,
        payload : error
}
}


export const fetchSpec = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token);
    if(token){
        return (dispatch) => {
            dispatch(fetchSpecDataRequest)
            axios(
                {
                    method:'get',
                    url:'http://localhost:3005/content/speciality',
                    headers:{Authorization:`'anju ${token}`}
                }
                )
            .then((response) => {
            //   console.log(response,"--------spec response in header----------");
              const specData =response.data;
              dispatch(setSpeciality);
            //   console.log(specData,"----spec--data----");
              
              dispatch(fetchSpecDataSuccess(specData))
              
            })
            .catch (error => {
                const errorMsg = error.message
                dispatch(fetchSpecDataFailure(errorMsg))
            })
        }
    }
    
}

export const setSpeciality =(data)=>{
    return{
        type:FETCH_ABOUT_TOKEN,
        payload:data
    }
}