import React from "react";
import {Route,Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Protectedroute({component:Component,...rest}:any) {
    const auth = useSelector((state:any) => state.authReducerItem.isAuthenticated);    
   console.log(auth,"get status");
    return (
     <Route 
     {...rest}
     render = {(props) =>
    auth ? (
        <Component{...props}/>
    ):(
        <Redirect
        to = {{
            pathname:'/login',
            state: {from:props.location},
        }}
        />
    )
  }
  />
  );
  }

// export default function Privateroute({children,...rest}:any){
//     const auth = useSelector((state:any) => state.authReducerItem.isAuthenticated); 
//     return (
//         <Route
//         {...rest}
//         render={() => auth
//         ? children
//     :<Redirect to="/login"/>
// }
// />
//     );

// }

