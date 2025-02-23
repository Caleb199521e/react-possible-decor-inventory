import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
import axios from 'axios';

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log('Signup successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup error:', error.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <div className='container'>
      <div className="top">
        <div className="text"> {action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {action === "Login" ? <div></div> : <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>}
        
      </div>
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
      
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignup}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};