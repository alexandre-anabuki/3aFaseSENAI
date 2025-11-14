import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

function Login() {
  return (
    <div className='md:flex '>
      <div className='bg-blue-500 md:h-screen md:w-screen'>
        <div className='h-screen  items-center justify-center flex'>
          <img src="public/toolbox-svgrepo-com.svg" alt="" className='md:w-xl w-50'/>
        </div>
      </div>
      <div>

      <LoginForm />
      </div>
    </div>
  )
}

export default Login
