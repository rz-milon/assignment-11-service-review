import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ReviewDetails = ({ review, handelAddReview, handleDeleteReview}) => {
    const {_id, customer_name, email, service_name, service_price, photo, customer_review } = review;
    return (
        <div className="mt-10 ">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-28 bg-amber-500" ></div>
                        <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt='' />
                        </div>
                        <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Maria Smantha</h4>
                            <hr />
                            <p className="mt-4 text-left">
                                <FaQuoteLeft className="w-12 h-12 font-bold pr-4 text-orange-500 "></FaQuoteLeft>
                                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
                            </p>
                            <div className="rating pt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                            </div>
                        </div>
                    </div>
                </div>
        // <tr>
        //     <td>
        //         <div className="avatar">
        //             <div className="mask mask-squircle w-12 h-12">
        //                 <img  src={photo} alt="ServicePicture" />
        //             </div>
        //         </div>
        //     </td>
        //     <td>
        //         <span className="text-md font-bold">{customer_name}</span>
        //     </td>
        //     <td>
        //         <span className="text-md font-bold">{email}</span>
        //     </td>
        //     <td>
        //         <span className="text-md font-bold">{service_name}</span>
        //     </td>
        //     <td>
        //         <span className="text-md font-bold"> {service_price}TK </span>
        //     </td>
        //     <td>
        //         <span className="text-md font-bold"> {customer_review} </span>
        //     </td>
        //     <td>
        //         <span className="text-md bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"> <Link to={`/update/${review._id}`}>Edit</Link> </span>
        //     </td>
        //     <td>
        //         <span onClick={() => handleDeleteReview(_id)} className="text-md bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</span>
        //     </td>
        // </tr>
    );
};

export default ReviewDetails;