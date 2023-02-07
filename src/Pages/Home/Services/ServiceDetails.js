import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaQuoteLeft } from 'react-icons/fa';

const ServiceDetails = () => {
    const { _id, title, img, rating, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([])
    const { register, handleSubmit } = useForm();

    const onSubmit = value => {

        if (user && user?.email) {
            const review = {
                review_id: _id,
                customer_name: value.name,
                avatar: value.avatar,
                email: value.email,
                service_name: title,
                service_price: price,
                photo: img,
                customer_review: value.review,
                time: new Date().getTime()
            }

            // create review and send it to database
            fetch("https://assignment-11-server-two-theta.vercel.app/reviews", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(review)
            })
                .then((res) => res.json())
                .then(() => {
                    toast.success("Review added successfully");
                })
                .catch((error) => console.log(error))
        } else {
            navigate("/")
        }
    }

    // get the current service review
    useEffect(() => {
        fetch(`https://assignment-11-server-two-theta.vercel.app/reviewsById?review_id=${_id}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.log(error))
    }, [_id])



    return (
        <div className='mx-20 grid lg:grid-cols-2 lg:gap-8 md:grid-cols-1 md:gap-5'>
            <div className='mb-24'>
                <h1 className='text-5xl font-bold text-stone-500 text-center my-10'>My Service Details</h1>
                <div className="grid grid-cols-1 gap-8">
                    <div className='card w-full  border border-gray'>
                        <figure className='w-full rounded-t-lg'><img className='w-full h-80 ' src={img} alt="" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-gray-600 text-2xl">{title}</h2>
                            <div className='flex justify-between text-xl text-orange-600 font-semibold'>
                                <p className=''>Price: ${price}</p>
                                <p>Rating: {rating}</p>
                            </div>
                            <div>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 bg-gray-100 p-4">
                        <h3 className='text-3xl font-bold text-center my-5'>Give Your Review</h3>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className=''>
                                <input
                                    type="text"
                                    className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                                    name='name'
                                    defaultValue={user?.displayName} {...register("name", { required: true })} placeholder="Name" />

                                <input
                                    type="email"
                                    className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="Email Address" required />

                                <input
                                    defaultValue={user?.photoURL}
                                    {...register("avatar", { required: true })}
                                    type="link"
                                    className="block border border-gray-200 w-full p-3 rounded mb-4 focus:outline-none focus:border-indigo-500"
                                    name="photoURL"
                                    placeholder="Photo URL" required />
                                <textarea className="textarea textarea-bordered border border-gray-200 w-full p-3 rounded mb-4 h-20 focus:outline-none focus:border-indigo-500" {...register("review", { required: true })} placeholder="Your review" name='review'></textarea>

                                <br />
                                <button
                                    type="submit"
                                    className="btn text-center py-3 rounded bg-green-900 text-white hover:bg-blue-600 focus:outline-none my-1 "
                                >Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-20 text-gray-700 mt-12 mx-24">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-gray-700">Testimonials</h3>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    Feedback this value able customer <small className='text-3xl text-blue-900 font-bold'>!!</small>
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
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
                </div>
            </div>
        </div>

        </div>
    );
};

export default ServiceDetails;