
import { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import CustomerReviews from './../customar review/CustomarReviews';
import FoodItems from './../food-items/FoodItems';

const ChefSection = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("/chefCard.json")
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])
    return (
        <div className='w-full md:mb-10 mb-6 px-3 md:px-0 md:mt-24 mt-6'>
            <h3 className=" text-center text-xl sm:text-2xl md:text-4xl  max-w-[800px] mx-auto  text-transparent bg-clip-text bg-[linear-gradient(75deg,#4f2adb_20%,#ffdd44_50%,#a816bf_70%)] font-extrabold mb-6 md:mb-10">Our Chefs with fevorite item !
            </h3>
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-10 gap-6 ">
                {
                    cards.map((card) =>
                        <ChefCard
                            key={card.id}
                            card={card}

                        ></ChefCard>
                    )
                }
            </div>
            <FoodItems></FoodItems>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default ChefSection;