import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Service/>
            <About/>
            <Contact/>
        </div>
    );
};

export default Home;