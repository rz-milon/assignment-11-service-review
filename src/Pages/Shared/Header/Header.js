import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Home from "../../Home/Home";
import Service from "../../Service/Service";
import About from "../../About/About";
import './Header.css';
import Contact from "../../Contact/Contact";
import Blog from "../../Blog/Blog";

const Header = () => {
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#000") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("6rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const linkItems =
        <>
            <Link className="px-2 py-1 lg:px-7 lg:py-5 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-400" activeClass='active' smooth spy to='home'>Home</Link>
            <Link className="px-2 py-1 lg:px-7 lg:py-5 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-400" activeClass='active' smooth spy to='service'>Service</Link>
            <Link className="px-2 py-1 lg:px-7 lg:py-5 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-400" activeClass='active' smooth spy to='about'>About</Link>
            <Link className="px-2 py-1 lg:px-7 lg:py-5 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-400" activeClass='active' smooth spy to='contact'>Contact</Link>
            <Link className="px-2 py-1 lg:px-7 lg:py-5 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-400" activeClass='active' smooth spy to='blog'>Blog</Link>
            {/* <NavLink className="px-2 py-1 lg:px-7 lg:py-5 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-400" smooth spy to='login'>Login</NavLink> */}
        </>

    return (
        <div>
            <div className="navbar bg-[#000] fixed top-0 left-0 right-0 z-[100] py-0 px-2 md:px-7 lg:px-10" style={{
                backgroundColor: navColor,
                height: navSize,
                transition: "all 1s"
            }}>
                <div className="navbar lg:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-compact dropdown-content p-2 mt-3 shadow w-52 ">
                            {linkItems}
                        </div>
                    </div>
                    <div>
                        <a smooth spy href="/" className="flex items-center flex-nowrap" ><img src="https://i.ibb.co/2tssyJH/logo.png" alt="" className='w-10 h-10 mx-3 font-bold text-[#5e03fc]' /><h2 className='text-xl md:text-2xl lg:text-3xl tracking-wide font-bold text-[#5e03fc] '>Al Farabi Photography </h2></a>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div className="menu menu-horizontal ">
                        {linkItems}
                    </div>
                </div>
            </div>
            <>
                <section id="home">
                    <Home />
                </section>
                <section id="service">
                    <Service />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="contact">
                    <Contact/>
                </section>
                <section id="blog">
                    <Blog/>
                </section>

            </>
        </div>
    );
};

export default Header;


