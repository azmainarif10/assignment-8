import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layouts/Root';
import Apps from './Pages/Apps';
import Installation from './Pages/Installation';
import Home from './Pages/Home';

 const router = createBrowserRouter([
      
  {
    path:"/",
    Component:Root,
    children:[

      {
        index:true,
        Component:Home,
 
      },
        {
        path:"/apps",
        Component: Apps,
 
      },
        { 
        path:"/install",
        Component: Installation,
 
      }
    ]
  }




 ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
