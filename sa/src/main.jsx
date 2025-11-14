import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Inventario from './pages/Home/Inventario';
import { AuthProvider } from "./context/AuthContext";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'cadastro',
    element: <Cadastro />
  },
  {
    path: 'inventario',
    element: <Inventario />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)

