
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from './../components/shared/footer/Footer';
import ScrollToTop from '../hooks/useScrollToTop';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const Main = () => {
    const [loading, setLoading] = useState(true);
    const { setOpen } = useAuth();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <div className='my-container sm:px-1 min-h-screen flex flex-col  '>
            <Navbar></Navbar>
            <div className='flex-grow' >
                <ScrollToTop></ScrollToTop>
                {
                    loading ?
                        <div className=' flex sm:mt-[25vh] mt-[20vh] w-full items-center justify-center'>                         
                            <p className='lg:text-5xl sm:text-3xl text-xl font-bold'>Loading </p>
                            <span className="text-yellow-400 lg:mt-4 sm:mt-2 mt-[6px] ml-1  sm:ml-2 loading loading-dots lg:loading-lg sm:loading-md loading-sm"></span>
                        </div >
                        :
                        <div onClick={() => setOpen(false)}>
                            <Outlet></Outlet>
                        </div>
                }

            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Main;