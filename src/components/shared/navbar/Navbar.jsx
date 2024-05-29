
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Bounce, toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut, loading } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logged out successfully!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }).catch((error) => {
                console.log(error);
            });
    }
    // to-do

    return (
        <div className="navbar sticky z-50 top-0 p-0 text-white bg-blue-800">
            <div className="navbar-start ">
                {/* this is for small device nav with responsivly */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu text-blue-700 font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-xl rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn hover:bg-blue-500 btn-ghost lg:font-bold font-semibold  text-xl md:text-2xl">Bangladeshi Chef Items</Link>
            </div>
            {/* this is for large device nav */}

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5  text-lg font-semibold px-1">
                    <li className='hover:bg-blue-500 font-bold hover:rounded-lg'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-blue-500 font-bold  hover:rounded-lg'>
                        <Link to="/blogs">Blog</Link>
                    </li>
                </ul>
            </div>
            {/* this is user  & log status section with condition */}
            {
                user ?
                    <div className="navbar-end">
                        {/* tool tip is here with username */}
                        <div tabIndex={0} role="button" className="btn tooltip md:tooltip-left tooltip-bottom btn-ghost btn-circle avatar" data-tip={user?.displayName}>

                            {/*------- current user photo -------  */}
                            {
                                !user.photoURL || loading ?
                                    <span className="loading mt-3 loading-spinner loading-md"></span>
                                    :
                                    <img className="w-12 rounded-full" alt="user-photo" src={user?.photoURL} />
                            }
                        </div>

                        <button onClick={handleLogOut} className='btn hover:bg-blue-500 btn-ghost text-lg  ml-2 font-bold '>Log out
                        </button>
                    </div>
                    :
                    loading ?
                        <div className="navbar-end mr-10 ">
                            <span className="loading  mr-10 loading-spinner loading-lg"></span>
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                        :
                        <div className="navbar-end">
                            <Link to="/login" className='btn hover:bg-blue-300 btn-ghost text-lg  lg:font-bold font-semibold  '>
                                Log in
                            </Link>
                            <Link to="/signup" className='btn hover:bg-blue-300 btn-ghost text-lg  lg:ml-2 lg:font-bold font-semibold '>
                                Sign Up
                            </Link>
                        </div>
            }
        </div>
    );
};

export default Navbar;