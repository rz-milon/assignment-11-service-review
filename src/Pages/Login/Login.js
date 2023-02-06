// import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
// import { AuthContext } from '../../contexts/AuthProvider';
// import { toast } from 'react-hot-toast';
// import useToken from '../../hooks/useToken';



const Login = () => {
    // const { login, googleLogin, setUser } = useContext(AuthContext);
    // const storeToken = useToken();
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || '/';


    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     login(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             form.reset();
    //             toast.success("Successfully login");

    //             const currentUser = {
    //                 email: user.email
    //             }

    //             console.log(currentUser);

    //             // get jwt token
    //             fetch('https://service-review-server-assignment-11-bice.vercel.app/jwt', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(currentUser)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     // local storage is the easiest but not the best place to store jwt token
    //                     localStorage.setItem('access-token', data.token);
    //                     navigate(from, { replace: true });
    //                 });

    //         })
    //         .catch(error => toast.error("Opps!", `${error.message}`));
    // }

    // const handleGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             const user = result.user;
    //             setUser(user)
    //             const currentUser = { email: user.email }

    //             // get jwt token and save it localStorage
    //             storeToken(currentUser);
    //         })
    //         .catch(error => toast.error("Opps!", `${error.message}`));
    // }



    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/nPsVN2c/zebra.jpg")` }} >
            <div className=" py-12 px-4 sm:px-6 lg:px-8">
                <div className=" max-w-md w-full space-y-8 p-10 rounded-xl z-10  text-center bg-white/95">
                    <div className="text-center">
                        <h2 className="mt-2 text-3xl font-bold text-gray-800">
                            Welcome Back!
                        </h2>
                        <p className="mt-2 text-sm text-gray-800">Please sign in to your account</p>
                    </div>

                    <form  className="mt-8 space-y-6 text-left" >
                        <div className="relative">
                            <label className="text-sm font-bold text-gray-800 tracking-wide">Email address</label>
                            <input className=" w-full text-base py-2 px-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" name="email" required />
                        </div>
                        <div className="mt-8 content-center">
                            <label className="text-sm font-bold text-gray-800 tracking-wide">Password</label>
                            <input className="w-full content-center text-base py-2 px-1 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" name="password" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
                                <label for="remember_me" className="ml-2 block text-sm text-gray-800">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link to="/" className="font-medium text-indigo-900 hover:text-indigo-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center bg-indigo-500 text-gray-100 p-3  rounded tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-700 shadow-lg cursor-pointer transition ease-in duration-300">
                                Sign in
                            </button>
                        </div>
                        <div>
                            <p className=' mt-10 text-center text-md text-gray-800'>Don't have an account? <Link to="/signup" className="text-indigo-700 hover:text-indigo-900 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link></p>
                        </div>
                    </form>

                    <div className="flex items-center justify-center space-x-2">
                        <span className="h-px w-16 bg-gray-300"></span>
                        <span className="text-gray-800 font-normal">Or continue with</span>
                        <span className="h-px w-16 bg-gray-300"></span>
                    </div>

                    <div className="flex flex-row justify-center items-center space-x-10">
                        <button className='opacity-50 hover:opacity-100  cursor-pointer transition ease-in duration-300'>
                            <FaGoogle className='w-8 h-8 text-blue-900'></FaGoogle>
                        </button>
                        <button className='opacity-50 hover:opacity-100  cursor-pointer transition ease-in duration-300'>
                            <FaGithub className='w-8 h-8 text-blue-900'></FaGithub>
                        </button>
                        <button className='opacity-50 hover:opacity-100  cursor-pointer transition ease-in duration-300'>
                            <FaTwitter className='w-8 h-8 text-blue-900'></FaTwitter>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;