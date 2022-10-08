import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import logo from '../Images/Red Onion Logo.png';

const Navbar = () => {
    let Links = [
        { name: "", link: "/review" },
        { name: "", link: "/dashboard" },
        { name: "", link: "/blogs" },
        { name: "", link: "/about" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='h-[15vh] sticky top-0 left-0 z-50 font-[Poppins] py-6 text-center lg:px-24 px-4'>
            <div className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-2xl absolute right-6 top-7 cursor-pointer lg:hidden'>
                    <i className={`${open ? 'fa-solid fa-x' : 'fa-solid fa-bars'} text-gray-700`}></i>
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100`}>
                    {
                        Links.map(link => <li
                            className='px-4 text-xl lg:my-0 my-5 text-black'
                            key={link.name}>
                            <CustomLink to={link.link}>{link.name}</CustomLink>
                        </li>)
                    }
                    <div className="dropdown dropdown-end px-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-red-500 text-white border-none">0</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-5 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">0 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions flex justify-center">
                                    <button className="bg-red-500 text-white font-bold px-6 py-2 rounded">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li className='px-4 text-black'><CustomLink to='/login'>Login</CustomLink></li>
                    <li className="px-4"><Link to='/signUp' className='bg-red-500 text-white rounded-3xl py-2 px-6'>SignUp</Link></li>              
                </ul>
            </div>
        </div>
    );
};

export default Navbar;