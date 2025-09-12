import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

//react router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Main from './layout/Main/Main';
import Blog from './pages/Blog/Blog';
import PostDetail from './pages/Blog/PostDetail';

const router = createBrowserRouter([
  {
    element:<Main />,
    children:[
      {path:"/", element:<Home />},
      {path:"sobre", element:<Sobre />},
      {path:"blog", element:<Blog />},
      {path:"post/:id", element:<PostDetail />}
    ]
  }
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path:"sobre",
  //   element: <Sobre />
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
