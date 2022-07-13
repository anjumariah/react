import { combineReducers } from "redux";
// import apiReducer from './api/apiReducer'
import footerReducer from "./footer/footerReducer";
import imageReducer from "./image/imageReducer";
import headerReducer from "./header/headerReducer";
import authReducer from "./loginform/loginReducer";

const rootReducer =combineReducers({
    imageItem:imageReducer,
    headerItem:headerReducer,
    footerItem:footerReducer,
    authReducerItem:authReducer
})

export default rootReducer