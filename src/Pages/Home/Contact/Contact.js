import React from 'react';
import { Link } from 'react-router-dom';
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='min-h-screen pt-16 bg-gradient-to-r from-blue-200 via-purple-500-300 to-blue-700'>
            <div className="lg:flex justify-between mx-24 py-32 px-10">
                <div className=''>
                    <h1 className='text-6xl text-gray-700 pb-3'>Contact Me</h1>
                    <p className='text-xl pb-6'>Fill up the from I'll get back to within 24 hours.</p>
                    <div className='space-y-4'>
                        <p className='flex items-center text-2xl font-bold text-orange-600'><HiPhone className='w-10 h-10 mr-6'></HiPhone>+880 1737-879367</p>
                        <p className='flex items-center text-2xl font-bold text-orange-600'><HiEnvelope className='w-10 h-10 mr-6'></HiEnvelope><Link>rzmilon@gmail.com</Link></p>
                        <p className='flex items-center text-2xl font-bold text-orange-600'><HiMapPin className='w-10 h-10 mr-6'></HiMapPin>72/A Panthapath, Dhaka-1205</p>
                    </div>
                    <div className='flex space-x-5 mt-12 md:col'>
                        <Link><FaFacebookSquare className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaFacebookSquare></Link>
                        <Link><FaTwitterSquare className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaTwitterSquare></Link>
                        <Link><FaLinkedin className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaLinkedin></Link>
                    </div>
                </div>
                <div className="">
                    <form className='grid lg:grid-cols-2 gap-2 md:grid-cols-1'>
                        <input
                            type="text"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="fullName"
                            placeholder="First Name" />
                        <input
                            type="text"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="fullName"
                            placeholder="Last Name" />

                        <input
                            type="email"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name="email"
                            placeholder="Email Address" required />

                        <input
                            type="phone"
                            className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                            name=""
                            placeholder="Phone" required />
                        <textarea className="textarea textarea-bordered border border-gray-200 w-full p-3 rounded mb-4 h-20 focus:outline-none focus:border-indigo-500 col-span-2" placeholder="Message"></textarea>

                        <br />
                        <button
                            type="submit"
                            className="w-full text-2xl text-center py-3 rounded bg-green-900 text-white hover:bg-blue-600 focus:outline-none my-1 "
                        >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;