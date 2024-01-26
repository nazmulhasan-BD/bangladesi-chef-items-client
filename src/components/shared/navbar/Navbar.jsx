import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-lg font-semibold rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="btn btn-ghost text-xl md:text-2xl ">
                <a> Bangladesi Chef Items</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg font-semibold px-1">
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>                    
                </div>
                {/* <h1>fkdfjkld</h1> to-do */}
            </div>
        </div>
    );
};

export default Navbar;