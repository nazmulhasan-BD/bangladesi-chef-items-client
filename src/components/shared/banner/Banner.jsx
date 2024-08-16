/* eslint-disable react/no-unescaped-entities */
import "../../../layout/Main.css"

const Banner = () => {

  return (
    <div className='relative 2xl:h-[660px] lg:h-[540px] md:h-[480px] sm:h-[460px] h-80 max-[334px]:h-[340px] w-full bg-[url("/src/assets/bannar_img/bannar2.jpg")] bg-cover bg-center '>
      <div className='absolute inset-x-2 lg:inset-x-10 md:inset-x-16 sm:inset-x-12 md:py-8 sm:py-6 p-2  text-center border rounded-lg bg-blue-700 
      bg-opacity-45 top-10 lg:top-60 md:top-48 sm:top-44 lt:top-32 2xl:top-80'>
        <h2 style={{
          textShadow: '-1px -1px 0 #ffffff,1px -1px 0 #ffffff,-1px 1px 0 #ffffff, 1px 1px 0 #ffffff'
        }} className='md:text-3xl  text-2xl text-red-900  xl:text-[42px] font-bold'>
          Welcome to our home page
        </h2>
        <h2 className=" md:text-lg  mx-auto lg:text-2xl text-justify font-lobstar text-[#ffffff] tracking-wide lg:mt-8 mt-4  lg:px-10 sm:px-6 ">
          Discover the vibrant flavors of Bangladeshi cuisine with our authentic recipes, from mouthwatering biryanis to delectable fish curries, experience the essence of Bangladesh's culinary traditions in every bite. Please review all Chef recipes. 
        </h2>
      </div>
    </div>
  );
};

export default Banner;