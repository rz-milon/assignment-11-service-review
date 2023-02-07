import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewDetails from './ReviewDetails';
import { FaQuoteLeft } from 'react-icons/fa';

const Review = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();


    const handelAddReview = event => {
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    // get reviews with email
    useEffect(() => {
        fetch(`https://assignment-11-server-two-theta.vercel.app/reviewsByEmail?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("access-token")}`
            }
        })
            .then((res) => {
                if (res.status === 403 || res.status === 401) {
                    logout();
                    navigate("/");
                }
                return res.json()
            })
            .then((data) => setReviews(data))
    }, [user?.email, logout, navigate])


    // Delete review
    const handleDeleteReview = (id) => {
        fetch(`https://assignment-11-server-two-theta.vercel.app/reviews/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                const remainingReviews = reviews.filter((review) => review._id !== id);
                setReviews(remainingReviews)
                toast.success("Review deleted successfully");
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className="px-20 py-10">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-gray-700">Testimonials</h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    Feedback this value able customer <small className='text-3xl text-blue-900 font-bold'>!!</small>
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 text-center">
            
                {
                    reviews.map(review => <ReviewDetails key={review._id}
                        review={review}
                        handelAddReview={handelAddReview}
                        handleDeleteReview={handleDeleteReview}
                    ></ReviewDetails>)
                }
                {/* <div className="mt-10 ">
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
                <div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-28 bg-green-800" ></div>
                        <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt='' />
                        </div>
                        <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Lisa Cudrow</h4>
                            <hr />
                            <p className="mt-4 text-left">
                                <FaQuoteLeft className="w-12 h-12 font-bold pr-4 text-orange-500 "></FaQuoteLeft>
                                Neque cupiditate assumenda in maiores
                                repudi mollitia architecto.
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
                <div className="mt-20">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-28 bg-purple-600"></div>
                        <div className="w-24 -mt-12 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt='' />
                        </div>
                        <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">John Smith</h4>
                            <hr />
                            <p className="mt-4 text-left">
                                <FaQuoteLeft className="w-12 h-12 font-bold pr-4 text-orange-500 "></FaQuoteLeft>
                                Delectus impedit saepe officiis ab
                                aliquam repellat rem unde ducimus.
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
                </div> */}
            </div>
            {/* <div>
                {
                    reviews.length === 0 ? <h4 className='text-2xl text-center'>No reviews</h4>
                        : <table className="table w-full border-2">
                            <thead className='text-center'>
                                <tr>
                                    <th className="text-xl">Avatar</th>
                                    <th className="text-xl">Name</th>
                                    <th className="text-xl">Email</th>
                                    <th className="text-xl">Service</th>
                                    <th className="text-xl">Price</th>
                                    <th className="text-xl">Review</th>
                                    <th className="text-xl">Edit</th>
                                    <th className="text-xl">Delete</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    reviews.map(review => <ReviewDetails key={review._id}
                                        review={review}
                                        handelAddReview={handelAddReview}
                                        handleDeleteReview={handleDeleteReview}
                                    ></ReviewDetails>)
                                }
                            </tbody>
                        </table>
                }
            </div> */}
        </div>
    );
};

export default Review;