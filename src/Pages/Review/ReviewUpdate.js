import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewUpdate = () => {
    const review = useLoaderData();
    const {user} = useContext(AuthContext);


    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (value) => {
        const newReview = {
            customer_name: value.name,
            email: value.email,
            service_name: review.name,
            service_price: review.price,
            photo: value.photoURL,
            customer_review: value.review,
            time: new Date().getTime()
        }
    

        // update review and send it to database
        fetch(`https://assignment-11-server-two-theta.vercel.app/reviews/${review._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Review updated successfully", );
                navigate("/review")
            })
            .catch((error) => console.log(error))
    }


    return (
        <div className='bg-black py-10'>
            <div className='w-1/2 mx-auto p-10'>
                <h4 className='text-white text-2xl text-center'>Please update your review</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800  mx-auto p-10  text-center rounded-xl">
                    <input className='py-1 px-2 w-full text-black' defaultValue={user?.displayName} type="text" {...register("name", { required: true })} placeholder="Name" />
                    <br />
                    <br />
                    <input defaultValue={user?.email} className='py-1 px-2 w-full text-black' type="email" {...register("email", { required: true })} placeholder="Email" />
                    <br />
                    <br />
                    <input defaultValue={user?.photoURL ? user?.photoURL : "PhototURL not added"} className='py-1 px-2 w-full text-black' type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" />
                    <br />
                    <br />
                    <textarea defaultValue={review.customer_review} className='py-1 px-2 w-full text-black' type="text" {...register("review", { required: true })} placeholder="Your review" />
                    <br />
                    <br />
                    <input type="submit" className='bg-blue-800 text-xl   cursor-pointer text-white px-10 py-2 rounded' value="Update Review" />
                </form>
            </div>
        </div>
    );
};

export default ReviewUpdate;