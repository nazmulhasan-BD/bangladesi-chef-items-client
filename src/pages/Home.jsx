
import { useEffect, useState } from 'react';
import Banner from '../components/shared/banner/Banner';
import CarouselSection from './../components/shared/carousel/CarouselSection';
import ChefSection from './../components/shared/chef-section/ChefSection';
import { Vortex } from 'react-loader-spinner';





const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);
    return (
        <div>
            {loading ?
                <div className=' flex mt-24  justify-center'>
                    <p className='text-5xl font-bold'>L</p>
                    <p className='mt-[10px]'><Vortex
                        visible={true}
                        height="42"
                        width="40"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['red', 'blue', 'green', 'yellow', 'white', 'orange', 'purple']}
                    /></p>
                    <p className='text-5xl font-bold'>ading </p>
                    <span className="text-yellow-400 mt-3 ml-2 loading loading-dots loading-lg"></span>
                </div>
                :
                <>
                    <Banner />
                    <CarouselSection />
                    <ChefSection />
                </>
            }
        </div>
    );
};

export default Home;
