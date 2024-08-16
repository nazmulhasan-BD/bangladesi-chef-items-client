
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Bounce, toast } from 'react-toastify';
import { VscChromeClose } from "react-icons/vsc";
import ActiveLink from './ActiveLink';

const Navbar = () => {
    const { user, logOut, loading, open, setOpen } = useAuth();
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
                    style: {
                        color: 'blue',  /* Replace with your desired color */
                        fontWeight:'700'
                    },
                });
            }).catch((error) => {
                console.log(error);
            });
    }
    // to-do

    return (
        <div className="flex justify-between  items-center sticky z-50 top-0  text-white py-2 px-2 sm:px-4 bg-blue-800">
            {/* ----------this is for small device---------- */}
            <div className="flex max-lt:w-full  gap-3 items-center ">
                <div className=" sm:hidden ">

                    {
                        open ?
                            <div>

                                <VscChromeClose onClick={() => setOpen(!open)} className='font-bold h-6 w-6' />

                                <ul className=" text-sm absolute text-center top-12 bg-gradient-to-b from-indigo-800 to-blue-400 text-white bg-gradient- p-1 left-[2px] font-bold  shadow  rounded-md w-[100px] ">
                                    <li className='w-full bg-blue-800  border-2 border-yellow-300 rounded-md p-[2px]'><Link to="/">Home</Link></li>

                                    <li className='w-full bg-blue-800  border-2 border-yellow-300 rounded-md mt-[2px] p-[2px]'><Link to="/blogs">Blogs</Link></li>
                                    <li className='w-full bg-blue-800  border-2 border-yellow-300 rounded-md mt-[2px] p-[2px]'><Link to="/about-us">About us</Link></li>
                                    {
                                        user ?
                                            <div>
                                                {
                                                    !user.photoURL || loading ?
                                                        <span className="loading loading-spinner loading-md"></span>
                                                        :
                                                        <img className="mx-auto lt:hidden w-8 h-8 rounded-full border-yellow-300 border-2 mt-[2px]" alt="user-photo" src={user?.photoURL} />
                                                }
                                                <button onClick={handleLogOut} className='w-full lt:hidden bg-blue-800 mt-[2px] border-2 border-yellow-300 rounded-md p-[2px]'>Log out
                                                </button>
                                            </div>
                                            :
                                            loading ?
                                                <div className="">
                                                    <li className='w-full lt:hidden bg-blue-800  border-2 border-yellow-300 mt-[2px] rounded-md p-[2px]'><span className="loading loading-spinner w-6"></span></li>

                                                    <li className='w-full lt:hidden bg-blue-800  mt-[2px] border-2 border-yellow-300 rounded-md p-[2px]'><span className="loading w-4 loading-dots "></span></li>
                                                </div>
                                                :
                                                <>
                                                    <li className='w-full lt:hidden bg-blue-800  border-2 border-yellow-300 mt-[2px] rounded-md p-[2px]'><Link to="/login">Log in</Link></li>

                                                    <li className='w-full lt:hidden bg-blue-800  mt-[2px] border-2 border-yellow-300 rounded-md p-[2px]'><Link to="/signup">Sign Up</Link></li>
                                                </>
                                    }
                                </ul>
                            </div>
                            :
                            <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    }
                </div>
                <Link to="/" className="hover:bg-blue-500 sm:p-1 hover:rounded-lg font-bold xl:text-3xl lg:text-2xl md:text-xl text-lg max-lt:text-xl max-lt:w-full text-center max-lt:mr-6 ">Bangladeshi Chef Items</Link>
            </div>

            {/* ---------this is for large device nav------------ */}

            <div className=" max-sm:hidden    ">
                <ul className="flex xl:gap-20 lg:gap-16 md:gap-10 sm:gap-5 lg:text-lg lg:font-bold font-semibold ">
                    <li className='hover:bg-blue-500 sm:p-1 hover:rounded-lg'>
                        <ActiveLink to="/">Home</ActiveLink>
                    </li>
                    <li className='hover:bg-blue-500 sm:p-1 hover:rounded-lg'>
                        <ActiveLink to="/blogs">Blogs</ActiveLink>
                    </li>
                    <li className='hover:bg-blue-500 sm:p-1 hover:rounded-lg'>
                        <ActiveLink to="/about-us">About us</ActiveLink>
                    </li>

                    <li className='min-[443px]:hidden hover:bg-blue-500 font-bold hover:rounded-lg'>
                        {
                            !user?.photoURL || loading ?
                                <span className="loading loading-spinner loading-md"></span>
                                :
                                <img className="md:w-12 md:h-12 w-8 h-8 rounded-full" alt="user-photo" src={user?.photoURL} />
                        }
                    </li>
                </ul>
            </div>
            {/* this is user  & log status section with condition */}
            <div>
                {
                    user ?
                        <div className="max-lt:hidden flex justify-between lg:w-[185px] md:w-[160px] sm:w-[140px] w-28 items-center  ">
                            {/* tool tip is here with username */}
                            <div tabIndex={0} role="button" className=" tooltip md:tooltip-left tooltip-bottom  " data-tip={user?.displayName}>

                                {/*------- current user photo -------  */}
                                {
                                    !user.photoURL || loading ?
                                        <span className="loading loading-spinner loading-md"></span>
                                        :
                                        <img className="lg:w-10 sm:ml-4   lg:h-10 md:h-8 md:w-8 w-7 h-7 rounded-full" alt="user-photo" src={user?.photoURL} />
                                }
                            </div>

                            <button onClick={handleLogOut} className=' hover:bg-blue-500 lg:text-lg lg:font-bold font-semibold sm:p-1 rounded-lg lg:ml-12 md:ml-8 sm:ml-5 ml-4 '>Log out
                            </button>
                        </div>
                        :
                        loading ?
                            <div className="flex lg:w-[185px] md:w-[160px] sm:w-[140px] w-[120px] max-lt:hidden justify-between items-center">
                                <span className="loading ml-4 loading-spinner lg:w-8"></span>
                                <span className="loading md:mr-5 mr-2 lg:w-9 w-6 loading-dots "></span>
                            </div>
                            :
                            <div className="lg:w-[185px] md:w-[160px] sm:w-[140px] w-[120px] max-lt:hidden lg:text-lg lg:font-bold font-semibold ">
                                <Link to="/login" className=' rounded-lg hover:bg-blue-500 sm:p-1 '>
                                    Log in
                                </Link>
                                <Link to="/signup" className='hover:bg-blue-500 sm:p-1 rounded-lg lg:ml-12 md:ml-8 sm:ml-5 ml-4  '>
                                    Sign Up
                                </Link>
                            </div>
                }
            </div>
        </div>
    );
};

export default Navbar;