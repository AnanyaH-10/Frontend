import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './component/Login/Login';
import Register from './component/Register/Register';
const router= createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    path :"signup",
    element: <Register/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
reportWebVitals();
