/* eslint-disable react/no-unescaped-entities */
import "../../../layout/Main.css"

const Banner = () => {

  return (
    <div className='relative lg:h-[85vh] h-[250px] bg-cover bg-center'  style={{ backgroundImage: "url('/src/assets/bannar_img/bannar2.jpg')", width: "100%" }}>
      <div className='absolute text-center lg:mt-40  lg:inset-16 lg:border  rounded-lg lg:bg-blue-700 lg:bg-opacity-40 '>
        <h2 style={{
          textShadow: '-2px -2px 0 #FEE7B9,2px -2px 0 #FEE7B9,-2px 2px 0 #FEE7B9, 2px 2px 0 #FEE7B9'
        }} className='text-3xl text-blue-900  lg:mt-3 mt-6 lg:text-5xl font-bold'>
          Welcome to our home page
        </h2>
        <h2 className=" text-lg mx-auto lg:text-2xl   text-justify font-lobstar text-[#ffffff] tracking-wide lg:mt-10 mt-5  lg:px-10 px-4">
          Discover the vibrant flavors of Bangladeshi cuisine with our authentic recipes, from mouthwatering biryanis to delectable fish curries, experience the essence of Bangladesh's culinary traditions in every bite. Please review all Chef recipes. 
        </h2>
      </div>
    </div>
  );
};

export default Banner;