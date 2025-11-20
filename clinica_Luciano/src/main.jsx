import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext'; // <-- import aqui

import PrivateRoute from './components/PrivateRoute/PrivateRoute';  // <-- import
import DashboardLayout from './layouts/DashboardLayout';
import MedicalRecordList from './components/MedicalRecordList/MedicalRecordList';
import RegisterFormPatient from './components/RegisterFormPatient/RegisterFormPatient';
import ConsultationForm from './components/ConsultationForm/ConsultationForm';
import ExamsForm from './components/ExamsForm/ExamsForm';
import PatientDetails from './components/PatientDetails/PatientDetails';

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  
  {
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/prontuarios", element: <MedicalRecordList/>},
      { path: "/pacientes", element: <RegisterFormPatient/> },
      { path: "/consultas", element: <ConsultationForm/> },
      { path: "/exames", element: <ExamsForm />},
      { path: "/paciente/:id", element: <PatientDetails />}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
