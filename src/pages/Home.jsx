import { useEffect, useState } from 'react';
import Banner from '../components/shared/banner/Banner';
import CarouselSection from './../components/shared/carousel/CarouselSection';
import ChefSection from './../components/shared/chef-section/ChefSection';


const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <>
            {
                loading ?
                    <div className=' flex sm:mt-[25vh] mt-[20vh] w-full items-center justify-center'>
                        <p className='lg:text-5xl sm:text-3xl text-xl font-bold'>Loading </p>
                        <span className="text-yellow-400 lg:mt-4 sm:mt-2 mt-[6px] ml-1  sm:ml-2 loading loading-dots lg:loading-lg sm:loading-md loading-sm"></span>
                    </div >
                    :
                    <div className='w-full'>
                        <Banner />
                        <CarouselSection />
                        <ChefSection />
                    </div>
            }
        </>
    );
};

export default Home;
