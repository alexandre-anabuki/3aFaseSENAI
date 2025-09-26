import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Login from './pages/Login/Login'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
