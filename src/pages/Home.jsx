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
        <>
            {
                loading ?
                    <div className=' flex sm:mt-[25vh] mt-[10vh] w-full items-center justify-center'>
                        <p className='lg:text-5xl sm:text-3xl text-xl  font-bold' > L</p >
                        <p className='max-lg:hidden mt-[15px]'>
                            <Vortex
                                visible={true}
                                height="42"
                                width="42"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple']}
                            />
                        </p>
                        <p className='lg:hidden max-sm:hidden mt-[10px]'>
                            <Vortex
                                visible={true}
                                height="26"
                                width="26"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple']}
                            />
                        </p>
                        <p className='sm:hidden mt-[6px]'>
                            <Vortex
                                visible={true}
                                height="16"
                                width="16"
                                ariaLabel="vortex-loading"
                                wrapperStyle={{}}
                                wrapperClass="vortex-wrapper"
                                colors={['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple']}
                            />
                        </p>
                        <p className='lg:text-5xl sm:text-3xl text-xl font-bold'>ading </p>
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
