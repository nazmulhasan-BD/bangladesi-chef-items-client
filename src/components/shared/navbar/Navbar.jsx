import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false;
    return (
        <div className="navbar sticky z-40 top-0 p-0 bg-yellow-500">
            <div className="navbar-start ">
                {/* this is for small device nav with responsivly */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-lg font-semibold rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blog</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-2xl ">Bangladeshi Chef Items</a>
            </div>
            {/* this is for large device nav */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg font-semibold px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                </ul>
            </div>
            {/* this is user  & log status section with condition */}
            {
                user ?
                    <div className="navbar-end">
                        {/* tool tip is here */}
                        <div tabIndex={0} role="button" className="btn tooltip md:tooltip-left tooltip-bottom btn-ghost btn-circle avatar" data-tip="user name">
                            <img className="w-12 rounded-full" alt="Tailwind CSS Navbar  component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                        <button className='btn btn-ghost text-lg  ml-2 font-semibold '>Log out
                        </button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to="/sign-up" className='btn btn-ghost text-lg  ml-2 font-semibold '>
                            Sign Up
                        </Link>
                        <Link to="/log-in" className='btn btn-ghost text-lg  ml-2 font-semibold '>
                            Log in
                        </Link>
                    </div>

            }
        </div>
    );
};

export default Navbar;