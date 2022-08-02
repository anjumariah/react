import { combineReducers } from "redux";
// import apiReducer from './api/apiReducer'
import footerReducer from "./footer/footerReducer";
import imageReducer from "./image/imageReducer";
import headerReducer from "./header/headerReducer";
import authReducer from "./loginform/loginReducer";
import aboutReducer from "./about/aboutReducer";
import specReducer from "./speciality/specReducer";

const rootReducer =combineReducers({
    imageItem:imageReducer,
    headerItem:headerReducer,
    footerItem:footerReducer,
    authReducerItem:authReducer,
    aboutReducerItem:aboutReducer,
    specReducerItem:specReducer
})

export default rootReducer