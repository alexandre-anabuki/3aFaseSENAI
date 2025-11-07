import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Login from './pages/Login/Login'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Dashboardlayout from './layouts/Dashboardlayout'
import MedicalRecordList from './components/MedicalRecordList/MedicalRecordList'
import RegisterFormPatient from './components/RegisterFormPatient/RegisterFormPatient'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    // path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboardlayout />
      </PrivateRoute>
    ),
    children:[
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'prontuarios', element: <MedicalRecordList /> },
      { path: 'pacientes', element: <RegisterFormPatient />}
       
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
    {/* <App /> */}
  </StrictMode>,
)
