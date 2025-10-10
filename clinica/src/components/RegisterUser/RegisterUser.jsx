import React from 'react'

const RegisterUser = () => {
  return (
    <div className='w-full max-w-md p-6 bg-white rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Criar Usuário</h2>
        <form className='space-y-4'>
            <div>
                <label htmlFor="email" className='block text-sm font-medium mb-1'>Email</label>
                <input type="emial" id='email' value='' required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>
        </form>
    </div>
  )
}

export default RegisterUser