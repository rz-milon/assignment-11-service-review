import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full h-screen backdrop-opacity-60">
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NmHqbD2/Elephent.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/vPzgFvg/zdenek-machacek-cf-Ic-Tiopin4-unsplash.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/gg73YVD/bison.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nPsVN2c/zebra.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/NmHqbD2/Elephent.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/2qPBMFZ/tiger.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/vPzgFvg/zdenek-machacek-cf-Ic-Tiopin4-unsplash.jpg" alt="" className="w-full" />
                <div className="absolute top-1/2 left-1/4">
                    <h1 className='text-6xl font-bold text-white tracking-wide'>Wildlife Photography
                    </h1>
                    <p className='text-white font-semibold text-xl text-center'>By <br /> <Link className='text-3xl tracking-wide font-bold hover:text-[#5e03fc]' to='/'>Al Farabi Photography</Link></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;