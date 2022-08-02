import axios from "axios"
import { FETCH_IMAGEDATA_FAILURE, FETCH_IMAGEDATA_REQUEST, FETCH_IMAGEDATA_SUCCESS ,FETCH_ABOUT_TOKEN} from "./imageType"

// export interface Props {
//     imageData: Object
//     dispatch:() =>any
//     error: null
//     token:string
// }

export const fetchImageDataRequest = () => {
    return {
        type : FETCH_IMAGEDATA_REQUEST
    }
}

 const fetchImageDataSuccess = (imageData) => {
    return {
        type :FETCH_IMAGEDATA_SUCCESS,
        payload : imageData
    }
}

 const fetchImageDataFailure = (error) => {
    return {
        type : FETCH_IMAGEDATA_FAILURE,
        payload : error
}
}

export const fetchImage = () => {
    const token= JSON.parse(localStorage.getItem("token"))
    console.log(token) 
    if(token){
        return (dispatch ) => {
            dispatch(fetchImageDataRequest)
            axios ({
                method:'get',
                url:'http://localhost:3005/card/cards',
                headers:{Authorization:`'anju ${token}`}
                
            } )
            .then((response) => {
              console.log (response);
              const imageData = response.data;
              dispatch(setCard);
            //   console.log(imageData,"-------------------------CARD_----------------");
              
              dispatch(fetchImageDataSuccess(imageData))
              
            })
            .catch (error => {
                const errorMsg = error.message
                dispatch(fetchImageDataFailure(errorMsg))
            })
        }
    }

  
}

export const setCard =(data)=>{
    return{
        type:FETCH_ABOUT_TOKEN,
        payload:data
    }
}