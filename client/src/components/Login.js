import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUp from './SignUp'

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} setShowLogin={setShowLogin}/>
        </>
      ) : (
        <>
          <SignUp onLogin={onLogin} setShowLogin={setShowLogin}/>
        </>
      )}
    </>
  )
}

export default Login