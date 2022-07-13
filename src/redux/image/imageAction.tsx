import axios from "axios"
import { FETCH_IMAGEDATA_FAILURE, FETCH_IMAGEDATA_REQUEST, FETCH_IMAGEDATA_SUCCESS } from "./imageType"

export interface Props {
    imageData: Object
    error: null
    dispatch:() =>any
}

export const fetchImageDataRequest = () => {
    return {
        type : FETCH_IMAGEDATA_REQUEST
    }
}

 const fetchImageDataSuccess = (imageData:Props) => {
    return {
        type :FETCH_IMAGEDATA_SUCCESS,
        payload : imageData
    }
}

 const fetchImageDataFailure = (error :Props) => {
    return {
        type : FETCH_IMAGEDATA_FAILURE,
        payload : error
}
}

export const fetchImage = () => {
    return (dispatch :any) => {
        dispatch(fetchImageDataRequest)
        axios.get ('http://localhost:3000/imgArrayData')
        .then((response) => {
          console.log (response);
          const imageData = response.data;
          dispatch(fetchImageDataSuccess(imageData))
          
        })
        .catch (error => {
            const errorMsg = error.message
            dispatch(fetchImageDataFailure(errorMsg))
        })
    }
}
