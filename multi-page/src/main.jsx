import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

//react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"sobre",
    element: <Sobre />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
