import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

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
            <NavLink className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-200" activeClass='active' to='/'>Home</NavLink>
            <NavLink className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-200" activeClass='active' to='service'>Service</NavLink>
            <NavLink className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-200" activeClass='active' to='about'>About</NavLink>
            <NavLink className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-200" activeClass='active' to='contact'>Contact</NavLink>
            <NavLink className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-200" activeClass='active' to='blog'>Blog</NavLink>
            <NavLink className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-[#1f2326] hover:text-white cursor-pointer text-gray-200" to='login'>Login</NavLink>
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
                        <a href="/" className="flex items-center flex-nowrap" ><img src="https://i.ibb.co/2tssyJH/logo.png" alt="" className='w-10 h-10 mx-3 font-bold text-[#5e03fc]' /><h2 className='text-xl md:text-2xl lg:text-3xl tracking-wide font-bold text-[#5e03fc] '>Al Farabi Photography </h2></a>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <div className="menu menu-horizontal ">
                        {linkItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;


