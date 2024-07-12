
import { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import CustomerReviews from './../customar review/CustomarReviews';

const ChefSection = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("/chefCard.json")
            .then(res => res.json())
            .then(data => setCards(data))

    }, [])
    return (
        <div className='mb-10 mt-24'>
            <h3 className=" text-center text-2xl lg:text-4xl max-w-[800px] mx-auto  text-transparent bg-clip-text bg-[linear-gradient(75deg,#4f2adb_20%,#ffdd44_50%,#a816bf_70%)] font-extrabold mb-10">
                <span className='text-5xl text-[#1ad609]'>O</span>ur Chefs with fevorite item !
            </h3>
            <div className="grid grid-cols-3 gap-20">
                {
                    cards.map((card) =>
                        <ChefCard
                            key={card.id}
                            card={card}

                        ></ChefCard>
                    )
                }
            </div>
            <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default ChefSection;