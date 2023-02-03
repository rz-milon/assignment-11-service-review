import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../Components/Home/Home';
import ErrorPage from '../../Components/Pages/Error/ErrorPage';
import Main from '../../Layout/Main';

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
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;