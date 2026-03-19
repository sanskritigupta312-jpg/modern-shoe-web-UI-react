import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login-page"> {/* Changed class name */}
      <div className="login-card">
        <div className="card-header">
          <h2>Welcome Back</h2>
          {/* Close button removed as it's now a full page */}
        </div>
        
        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@example.com" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-btn">Sign In</button>
        </form>

        <div className="divider"><span>OR</span></div>
        
        <div className="social-login">
          <button className="google-btn">Continue with Google</button>
        </div>
        
        <p className="auth-footer">
          Don't have an account? <span className="red-text">Join Us</span>
        </p>
      </div>
    </div>
  )
}

export default Login