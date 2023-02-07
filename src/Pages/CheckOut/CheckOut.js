import React from 'react';
import { useState } from 'react';
import ReviewDetails from '../Review/ReviewDetails';

const CheckOut = () => {
    const [user, ] = useState([]);
    return (
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-12'>
            <form >
                <h2 className="text-4xl">You are about to order: {}</h2>
                <h4 className="text-3xl">Price: {}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Your Message" required></textarea>

                <input className='btn mt-4 bg-blue-800 tracking-wide' type="submit" value="Place Your Order" />
            </form>
            <div>
                <ReviewDetails></ReviewDetails>
            </div>
         </div>
    );
};

export default CheckOut;