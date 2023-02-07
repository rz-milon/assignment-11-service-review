import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-assignment-11-bice.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='lg:mx-24 md:mx-12 sm:mx-4 mb-12 pt-12'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-[#f50505] mt-20'>My Service</h2>
                <p className='mt-5'>I provide world class Photography Service in all country. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;