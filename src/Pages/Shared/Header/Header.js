import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';



const Header = () => {
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#60e805") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("6rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
        toast.success("Successfully log out");
        navigate("/")
    }
    const menuItems =
        <>
            <NavLink className={({ isActive }) => isActive ? "text-[1.40rem] font-bold tracking-wide text-[#5e03fc] border-b-4 border-[#5e03fc] transition-colors duration-200 px-2 py-1 lg:px-5 lg:py-4 pointer-events-none"
                : "px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 hover:text-[#5e03fc] cursor-pointer text-[#020226] text-xl"
            } activeClass='active' to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[1.40rem] font-bold tracking-wide text-[#5e03fc] border-b-4 border-[#5e03fc] transition-colors duration-200 px-2 py-1 lg:px-5 lg:py-4 pointer-events-none"
                : "px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 hover:text-[#5e03fc] cursor-pointer text-[#020226] text-xl"
            } to='/conditional-services'>Service</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[1.40rem] font-bold tracking-wide text-[#5e03fc] border-b-4 border-[#5e03fc] transition-colors duration-200 px-2 py-1 lg:px-5 lg:py-4 pointer-events-none"
                : "px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 hover:text-[#5e03fc] cursor-pointer text-[#020226] text-xl"
            } to='/about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[1.40rem] font-bold tracking-wide text-[#5e03fc] border-b-4 border-[#5e03fc] transition-colors duration-200 px-2 py-1 lg:px-5 lg:py-4 pointer-events-none"
                : "px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 hover:text-[#5e03fc] cursor-pointer text-[#020226] text-xl"
            } to='/contact'>Contact</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-[1.40rem] font-bold tracking-wide text-[#5e03fc] border-b-4 border-[#5e03fc] transition-colors duration-200 px-2 py-1 lg:px-5 lg:py-4 pointer-events-none"
                : "px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 hover:text-[#5e03fc] cursor-pointer text-[#020226] text-xl"
            } to='/blog'>Blog</NavLink>

            {/* <>
                {
                    user.email ? 
                    <Link onClick={handleLogOut} className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 text-[#020226] cursor-pointer hover:text-[#5e03fc] text-xl" to='/'>Logout</Link>
                    :
                    <Link className="px-2 py-1 lg:px-5 lg:py-4 hover:bg-black/10 text-[#020226] cursor-pointer hover:text-[#5e03fc] text-xl" to='/login'>Login</Link>
                }
            </> */}

        </>

    return (
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
                    <div tabIndex={0} className="menu menu-compact dropdown-content p-2 mt-3 shadow w-52 bg-slate-400">
                        {menuItems }
                    </div>
                </div>
                <div>
                    <a href="/" className="flex items-center flex-nowrap" ><img src="https://i.ibb.co/2tssyJH/logo.png" alt="" className='w-10 h-10 mx-3 font-bold text-[#5e03fc]' /><h2 className='text-2xl md:text-4xl lg:text-5xl tracking-wide font-bold text-[#5e03fc] '>Al Farabi Photography </h2></a>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <div className="menu menu-horizontal ">
                    {menuItems }
                </div>
            </div>
        </div>
    );
};

export default Header;
