import React from 'react';

const Footer = () => {
    return (
        <footer className=" px-40 py-10 bg-[#000] text-neutral-content">
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='grid grid-cols-1'>
                    <span className="footer-title ">Services</span>
                    <a href=' ' className="link link-hover">Branding</a>
                    <a href=' ' className="link link-hover">Design</a>
                    <a href=' ' className="link link-hover">Marketing</a>
                    <a href=' ' className="link link-hover">Advertisement</a>
                </div>
                <div className='grid grid-cols-1'>
                    <span className="footer-title ">Company</span>
                    <a href=' about' className="link link-hover">About</a>
                    <a href='contact ' className="link link-hover">Contact</a>
                    <a href=' ' className="link link-hover">Jobs</a>
                    <a href=' ' className="link link-hover">Press kit</a>
                </div>
                <div className='grid grid-cols-1'>
                    <span className="footer-title ">Legal</span>
                    <a href=' ' className="link link-hover">Terms of use</a>
                    <a href=' ' className="link link-hover">Privacy policy</a>
                    <a href=' ' className="link link-hover">Cookie policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;