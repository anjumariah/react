import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getLogin } from '../redux';
import './login.css'
import axios from "axios";

// type StateProp = {
//   isAuthenticated: boolean
//   handleSubmit: (e: any) => void
//    authReducerItem:boolean | string |any
//    setEmail: (value: React.SetStateAction<string>) => void
//    setPassword: (value: React.SetStateAction<string>) => void
        
// }

export const Login = () => {
const dispatch =useDispatch();
const history = useHistory(); 
const state = useSelector((state) => state.authReducerItem.adminInfo);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const[loginStatus,setLoginStatus] =useState('false')

  const handleSubmit = (event) => {
    event.preventDefault();
 
      // if(state.email === email && state.password === password){
      //   dispatch(getLogin());
      //   history.push("/"); 
      // }else{
      //   console.log("Login Info don't match, please check");
      // }
      if( email && password){
        dispatch(getLogin());
        history.push("/"); 
      }else{
        console.log("Login Info don't match, please check");
      }

      const loginData= {email:email,password:password}
      console.log(loginData);
      axios.post('http://localhost:3000/auth/login',loginData)
      .then((res) => {
        console.log(res,"login infooooooooooooo");
        localStorage.setItem("token",JSON.stringify(res.data.token))
        
       } );
  };

  return(
    <div className='loginPage'>
      <h2>AdminLoginPage</h2>
      <form onSubmit={handleSubmit} className='loginPage'>
        <input type="email" 
        placeholder = "Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        /><br/>
        <input type="password" 
        placeholder='password'
        value={password}
        onChange={(event)=> setPassword(event.target.value)}
        /><br/>
        <button>LogIn</button>
      </form>
    </div>
  )
}