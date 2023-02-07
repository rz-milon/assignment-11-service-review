import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import Review from "../../Pages/Review/Review";
import Signup from "../../Pages/Signup/Signup";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Services from "../../Pages/Home/Services/Services";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import ConditionalServiceLoad from "../../Pages/Home/ConditionalServiceLoad/ConditionalServiceLoad";
import ReviewUpdate from "../../Pages/Review/ReviewUpdate";
import About from "../../Pages/Home/About/About";
import ReviewDetails from "../../Pages/Review/ReviewDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/services',
                loader:()=>fetch('https://service-review-server-assignment-11-bice.vercel.app/services'),
                element:<Services/>
            },
            {
                path:'/conditional-services',
                element:<ConditionalServiceLoad/>
            },
            {
                path:'services/:id',
                loader:({params})=> fetch(`https://service-review-server-assignment-11-bice.vercel.app/services/${params.id}`),
                element:<PrivetRoute><ServiceDetails/></PrivetRoute>
            },
            {
                path:'review',
                element:<Review/>
            },
            {
                path: "/update/:id",
                // loader: ({ params }) => fetch(`https://assignment-11-server-two-theta.vercel.app/reviews/${params.id}`),
                element: <ReviewUpdate/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
               path:'/login',
               element:<Login/>
            },
        ]
    }
]);

export default router;