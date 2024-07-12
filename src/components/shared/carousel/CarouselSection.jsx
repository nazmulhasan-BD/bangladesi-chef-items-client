import bannar1 from '../../../assets/bannar_img/bannar1.jpg';
import bannar3 from '../../../assets/bannar_img/bannar3.jpg';
import bannar4 from '../../../assets/bannar_img/bannar4.jpg';
import bannar5 from '../../../assets/bannar_img/bannar5.jpg';
import bannar6 from '../../../assets/bannar_img/bannar6.webp';
import bannar7 from '../../../assets/bannar_img/bannar7.jpg';
import Carousel from '../../../hooks/useCarousel';

const CarouselSection = () => {
  const items = [
    bannar7,
    bannar1,
    bannar6,
    bannar5,
    bannar3,
    bannar4,
    bannar5
  ];

  return (
    <div className=" text-center my-8">
      <h1  className=" text-2xl lg:text-4xl max-w-[800px] mx-auto  text-transparent bg-clip-text bg-[linear-gradient(90deg,#4f2adb_30%,#ffdd44_40%,#a816bf_80%)] font-extrabold mb-6">Here are some items with slider !</h1>
      <Carousel items={items} />
    </div>
  );
};

export default CarouselSection;
