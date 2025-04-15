import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify'; // Import the toast function
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

export const LoginSignup = () => {
  const [action, setAction] = useState("Login"); // Set initial state to "Login"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      toast.error("All fields are required!"); // Show toast error
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match!"); // Show toast error
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        name,
        email,
        password,
        confirmPassword,
      });
      console.log('Signup successful:', response.data);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user); // Set user information in context
      toast.success("Signup successful!"); // Show toast success
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || "Signup error");
      toast.error(error.response?.data?.message || "Signup error"); // Show toast error
      console.error('Signup error:', error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      toast.error("Email and password are required!"); // Show toast error
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user); // Set user information in context
      toast.success("Login successful!"); // Show toast success
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || "Login error");
      toast.error(error.response?.data?.message || "Login error"); // Show toast error
      console.error('Login error:', error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const closeErrorModal = () => {
    setError("");
  };

  const toggleAction = () => {
    setAction((prevAction) => (prevAction === "Login" ? "Sign Up" : "Login"));
  };

  return (
    <div className='container'>
      <div className="top">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {action === "Login" ? null : (
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
      )}
      
      <div className="submit-container">
        {action === "Sign Up" ? (
          <button className="submit" onClick={handleSignup} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        ) : (
          <button className="submit" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        )}
      </div>
      <div className="toggle-container">
        <button className="toggle-btn" onClick={toggleAction}>
          {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
        </button>
      </div>
    </div>
  );
};
