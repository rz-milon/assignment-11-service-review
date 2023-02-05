import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../../Pages/Error/ErrorPage';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import Service from '../../Pages/Service/Service';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';
import Login from '../../Pages/Login/Login';

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'service',
                    element:<Service/>
                },
                {
                    path:'about',
                    element:<About/>
                },
                {
                    path:'contact',
                    element:<Contact/>
                },
                {
                    path:'login',
                    element:<Login/>
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;