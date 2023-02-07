import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse lg:mx-24">
                <img src="https://i.ibb.co/KF5kWVm/SMo-VHww3re-AYjr-BRy2q-Iw-SRY70f-NID4b-Y2-Xgel7-y1-Bw39hh-Vng-OYAyvg-Uw-Ix-Ti-RDPv-Tirib-Fh3kf-Nnnwz.png" className="w-full max-h-screen rounded-lg shadow-2xl opacity-80 hover:opacity-100" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-blue-900">Hello!</h1>
                    <h2 className='text-3xl font-bold text-red-500'>I'm a Photographer</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/contact'>
                        <button className="btn btn-primary">Appointment</button>
                    </Link>
                    <div className='flex space-x-5 mt-12 md:col'>
                        <Link><FaFacebookSquare className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaFacebookSquare></Link>
                        <Link><FaTwitterSquare className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaTwitterSquare></Link>
                        <Link><FaLinkedin className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaLinkedin></Link>
                        <Link><FaInstagramSquare className='w-10 h-10 text-black opacity-60 hover:opacity-100'></FaInstagramSquare></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;