import React, { useEffect } from "react";
import axios from "axios";
import './App.css'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import { Login}  from "./pages/login";
import Protectedroute from "./protectedRoute";
import Speciality from "./components/speciality/speciality";
import About from "./components/about/about";
import Signup from "./pages/signup";
// import Privateroute from "./protectedRoute";


export default function App () {  
//   // sample env file 
//  console.log(process.env,"env file")

// useEffect(() => {
//   axios.get(
//     `${process.env.REACT_APP_SECRET_HOME_DATA}`
//     )
//      .then((response) => {
//    console.log(response,"env");
//    console.log(response.data,"data from env file");
//   })
// })


  return (  
       <Router > 
         <Switch>
          
          <Protectedroute exact path="/" component={Home} />
          
          <Protectedroute  exact path="/speciality" component={Speciality}/>
          <Protectedroute  exact path="/about" component={About}/>
          
          {/* <Privateroute exact path="/" component={Home} /> */}
         <Route exact path="/login" component={Login} />   
         <Route exact path="/signup" component={Signup}/>                  
         </Switch>
       </Router>   
  );
}



