import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <>
      <div className='sec'>
        <div className="login-box">
    <h2>Login</h2>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
  </div>
      </div>
    </>
  )
}

export default Login
