import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import LogIn from './pages/LogIn';
import CardDescription from './componentes/Card/CardDescription';
import Register from './pages/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRouts from './Private/PrivateRouts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/description/:id',
        element: <PrivateRouts><CardDescription /></PrivateRouts>,
        loader: () => fetch('/service.json')
      },
      {
        path: '/about',
        element: <PrivateRouts><About /></PrivateRouts>
      },
      {
        path: '/gallery',
        element: <PrivateRouts><Gallery /></PrivateRouts>
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)

