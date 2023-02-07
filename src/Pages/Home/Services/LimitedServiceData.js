import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LimitedServiceData = () => {
    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch("https://assignment-11-server-two-theta.vercel.app/limited-service")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((err) => console.log(err))
    }, []);


    return (

        <div className='mx-20'>
            <div className='mb-24'>
                <h1 className='text-5xl font-bold text-stone-500 text-center my-10'>My Service Details</h1>
                <div className="grid lg:grid-cols-2 lg:gap-8 md:grid-cols-1 md:gap-4 sm:gap-5">

                    {
                        services.map(service => <div className='card w-full  border border-gray'>
                            <figure className='w-full rounded-t-lg'><img className='w-full h-80 ' src={service.img} alt="" /></figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-gray-600 text-2xl">{service.title}</h2>
                                <div className='flex justify-between text-xl text-orange-600 font-semibold'>
                                    <p className=''>Price: ${service.price}</p>
                                    <p>Rating: {service.rating}</p>
                                </div>
                                <div>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                            <div className='text-center py-5'>
                                <button className="border-[1px] border-[#FF3811] rounded-[5px] font-semibold text-[18px] px-5 py-3 text-[#FF3811] hover:bg-orange-500 hover:text-white"><Link to="/services-details">More Services</Link></button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LimitedServiceData;