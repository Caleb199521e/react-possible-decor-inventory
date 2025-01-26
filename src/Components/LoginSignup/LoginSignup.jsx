import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import email_icon from '../Assets/email.png'

export const LoginSignup = () => {
  return (
    <div classname='container'>
      <div className="header">
        <div className="text"> Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src= {password_icon} alt="" />
          <input type="password" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="Confirm Password" />
        </div>
      </div>

    </div>
  )
}

