import axios from "axios"
import { FETCH_HEADERDATA_FAILURE, FETCH_HEADERDATA_REQUEST, FETCH_HEADERDATA_SUCCESS } from "./headerTypes"

 interface Props {
    headerData: Object
    error: null
    dispatch: Function
}


export const fetchHeaderDataRequest = () => {
    return {
        type : FETCH_HEADERDATA_REQUEST
    }
}


    const fetchHeaderDataSuccess =( headerData:Props)=> {
    return {
        type :FETCH_HEADERDATA_SUCCESS,
        payload : headerData
    }
}

 const fetchHeaderDataFailure = (error:Props) => {
    return {
        type : FETCH_HEADERDATA_FAILURE,
        payload : error
}
}

export const fetchHeader = () => {
    return (dispatch:any) => {
        dispatch(fetchHeaderDataRequest)
        axios.get(
            `${process.env.REACT_APP_SECRET_HOME_DATA}`
            )
        .then((response) => {
          console.log(response);
          const headerData =response.data;
          dispatch(fetchHeaderDataSuccess(headerData))
          
        })
        .catch (error => {
            const errorMsg = error.message
            dispatch(fetchHeaderDataFailure(errorMsg))
        })
    }
}