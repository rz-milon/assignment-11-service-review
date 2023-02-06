import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../../Pages/Error/ErrorPage';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home/Home';
import Service from '../../Pages/Home/Service/Service';
import About from '../../Pages/Home/About/About';
import Contact from '../../Pages/Home/Contact/Contact';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Blog from '../../Pages/Home/Blog/Blog';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'service',
                    element: <Service />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'contact',
                    element: <Contact />
                },
                {
                    path: 'blog',
                    element: <Blog />
                },
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'signup',
                    element: <Signup />
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;