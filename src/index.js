import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './contexts/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>
);

