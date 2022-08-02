import React,{ useState }  from "react";
import './signup.css';
import axios from "axios";
import { useHistory } from 'react-router-dom';

export default function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    const history = useHistory(); 
    
    const handleChange = (e) => {
        setName(e.target.value);
      }
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      }

      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      }
      const handleConfPasswordChange = (e) => {
        setRePassword(e.target.value);
      }
      const handleSubmit = (e) => {
        // if (password !== rePassword) {
        //   console.log("password Not Match");
        // } else {
        //   // console.log('A form was submitted with Name ');
        // }
        e.preventDefault();
        
        const signupData= {name:name,email:email,password:password}
        console.log(signupData);

        
        axios.post('http://localhost:3005/auth/signup',signupData)
        .then(res => console.log(res,"SIGNUP"))
      }
      
      const handleLogin = () =>{
        history.push("/login");
      }
  return (
    
        <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h3> Sign-up Form </h3>      
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} placeholder="Name" /><br />
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} placeholder="Email" /><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} placeholder="Password" /><br />
          <input type="password" value={rePassword} required onChange={(e) => { handleConfPasswordChange(e) }} placeholder="Re: Password"/><br />
          <input type="submit" value="Submit" /> <h2 className="loginBtn" onClick={handleLogin}>Login</h2>
        </form>
      </header>

    </div>
  )
}

