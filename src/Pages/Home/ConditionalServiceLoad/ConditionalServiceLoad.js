import React, { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const ConditionalServiceLoad = () => {
const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/conditional-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='lg:mx-24 md:mx-12 sm:mx-4 mb-12 pt-20'>
            {
                services.length === 0 ? <div className='text-center mt-5'>
                    <h1 className='text-2xl'>Loading...</h1>
                    <div className='w-20 mx-auto'>
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </div>
                </div>
                    :
                    <>
                        <div className='text-center'>
                            <h2 className='text-5xl font-bold text-[#f50505] mt-20'>My Service</h2>
                            <p className='mt-5'>I provide world class Photography Service in all country. </p>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                            {
                                services.map(service => <div key={service._id} className="card w-full   shadow-lg shadow-black/60">
                                    <figure className='w-full rounded-t-lg'><img className='w-full h-36 ' src={service.img} alt="" /></figure>
                                    <div className="card-body p-4">
                                        <h2 className="card-title text-gray-600 text-2xl">{service.title}</h2>
                                        <div className='flex justify-between text-xl text-[#f50505] font-semibold'>
                                            <p className=''>Price: ${service.price}</p>
                                            <p>Rating: {service.rating}</p>
                                        </div>
                                        <div>
                                            <p>{service.description.length > 100 ? service.description.slice(0, 100) + "..." : service.description}</p>
                                        </div>
                                    </div>

                                    <Link to={`/services/${service._id}`}><button className='bg-[#5e03fc] text-white text-xl w-full font-semibold px-5 py-1 rounded-none rounded-b-lg hover:bg-[#60e805]'>Details</button> </Link>
                                </div>)
                            }
                        </div>
                        <div className='text-center py-5'>
                            <Link to="/services"><button className="border-[1px] border-[#FF3811] rounded-[5px] font-semibold text-2xl px-5 py-3 text-[#FF3811] hover:bg-[#60e805] hover:text-white hover:translate-x-6 delay-300 inline-flex items-center justify-center ">More Services<span className='text-2xl ml-2'> <HiArrowNarrowRight /></span></button></Link>
                        </div>
                    </>
            }
        </div>
    );
};

export default ConditionalServiceLoad;