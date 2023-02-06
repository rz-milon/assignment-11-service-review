import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/page-not-found.gif';

const ErrorPage = () => {
    return (
        <div className="">
            <div className=" ">
                <img
                    className="object-cover w-full min-h-fit md:h-64 lg:h-screen"
                    src={ErrorImg}
                    alt=""
                />

            </div>
            <div className="absolute top-3/4 left-[45%] right-0 mx-auto ">
                    <Link
                        to="/"
                        className=" border inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-800 transition duration-200  rounded bg-transparent hover:bg-amber-400 "
                    >
                        <FaChevronLeft className='flex justify-start mr-4'/>
                        Back To Home
                    </Link>
                </div>
        </div>
    );
};

export default ErrorPage;