/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

const useCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

// two different function apply for learning purpose.....
  const goToPrevious = () => {
    let newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className='border-animation2 border-2 lg:p-3 p-2 border-yellow-600 '>
      <div className='relative z-10 rounded-xl overflow-hidden'>
        <div className='lg:h-[460px] h-full flex transition-transform duration-1000 ease-in-out' style={{ transform: `translate(-${currentIndex * 100}%)` }}>
          {
            items.map((item, i) => {
              return <img className='min-w-full rounded-xl ' key={i} src={item} alt="" />;
            })
          }
        </div>
        <div className=" absolute inset-0  flex justify-between items-center " >
          <button className={`font-bold border-[3px] border-yellow-300 text-white bg-blue-700 hover:bg-orange-800 py-1 px-2 rounded-xl ${currentIndex==0 ? 'cursor-not-allowed':''}`} onClick={goToPrevious} disabled={currentIndex === 0}>
          <FaAngleLeft className='lg:text-3xl text-xl' />
          </button>
          <button className={`text-white font-bold border-[3px] border-yellow-300  bg-blue-700 hover:bg-orange-800 py-1 px-2 rounded-xl ${currentIndex === items.length - 1 ? 'cursor-not-allowed':''}`} onClick={goToNext} disabled={currentIndex === items.length - 1}>
          <FaAngleRight className='lg:text-3xl text-xl' />
          </button>
        </div>
        <div className="flex justify-center lg:gap-6 gap-3 absolute bottom-10 left-0 right-0">
          {items.map((_, index) => (
            <div
              key={index}
              className={`transition-all border border-blue-900 duration-700 lg:w-3 lg:h-3 w-2 h-2  rounded-full ${currentIndex === index ? 'bg-blue-900  border-2' : 'bg-sky-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default useCarousel;
