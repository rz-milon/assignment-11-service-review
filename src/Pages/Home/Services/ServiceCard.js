import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description, rating } = service;
    return (
        <div className="card w-full   shadow-lg shadow-black/60">
            <figure className='w-full rounded-t-lg'><img className='w-full h-36 ' src={img} alt="" /></figure>
            <div className="card-body p-4">
                <h2 className="card-title text-gray-600 text-2xl">{title}</h2>
                <div className='flex justify-between text-xl text-[#f50505] font-semibold'>
                    <p className=''>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div>
                    <p>{service.description.length > 100 ? service.description.slice(0, 100) + "..." : description}</p>
                </div>
            </div>

            <Link to={`/services/${service._id}`}><button className='bg-[#5e03fc] text-white text-xl w-full font-semibold px-5 py-1 rounded-none rounded-b-lg hover:bg-[#60e805]'>Details</button> </Link>
        </div>
    );
};

export default ServiceCard;