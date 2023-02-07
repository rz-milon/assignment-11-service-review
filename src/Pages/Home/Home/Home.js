import React from 'react';
import Review from '../../Review/Review';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ConditionalServiceLoad from '../ConditionalServiceLoad/ConditionalServiceLoad';
import Contact from '../Contact/Contact';




const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <ConditionalServiceLoad></ConditionalServiceLoad>
            <Review></Review>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;