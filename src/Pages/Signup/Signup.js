import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Signup = () => {
    const { createUser, logOut, updateUserProfile, googleLogin, setUser } = useContext(AuthContext);

    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = event.target.value;
        const photoURL = event.target.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                handleProfileUpdate(name, photoURL);
                logOut();
                toast.success("Signup successfully");
                Navigate("/")
            })
            .catch((error) => console.log(error));
    };

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success("Good job!", "Login successfully");
                // navigate("/")
            })
            .catch(error => console.error(error));
    };



    return (
        <div className="w-full h-full flex flex-col opacity-90" style={{ backgroundImage: `url("https://i.ibb.co/XCwRTq0/howling-red-z-ATDM3xb-OBI-unsplash.jpg")` }}>
            <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className=" px-6 py-8 rounded text-black w-full">
                    <h1 className="mb-8 text-4xl text-center text-white">Sign up</h1>
                    <form onSubmit={handelSignUp}>
                        <input
                            type="text"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="fullName"
                            placeholder="Full Name" />

                        <input
                            type="email"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="email"
                            placeholder="Email Address" required />

                        <input
                            type="password"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="password"
                            placeholder="Password" required />
                        <input
                            type="password"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="confirm_password"
                            placeholder="Confirm Password" required />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1 bg-transparent mt-3 border"
                        >Create Account</button>
                    </form>
                    <div className=''>
                        <button onClick={handleGoogleLogin}
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1 flex justify-center items-center bg-transparent mt-3 border"
                        ><FaGoogle className='w-5 h-5 text-black mr-4' />Continue With Google</button>
                    </div>

                    <div className="text-center text-sm text-gray-200 mt-4">
                        By signing up, you agree to the
                        <Link className="border-b border-gray-600 ml-2" to="#">
                            Terms of Service
                        </Link> and
                        <Link className="border-b border-gray-600 ml-2" to="#">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;