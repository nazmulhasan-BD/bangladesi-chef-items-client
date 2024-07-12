/* eslint-disable react/prop-types */

import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChefCard = ({ card }) => {
    const {chefName} = card;

    return (
        <div className=" border-2 rounded-2xl  mx-auto  p-6 shadow-2xl ">
            <img src={card.image} alt="" className=" h-[210px] w-[320px] rounded-t-2xl" />
            <h5 className="text-xl font-bold mt-7">Chef Name: <span className="text-[#1ad609]">{card.chefName}</span></h5>
            <h5 className="font-semibold mt-2">Years of experience: {card.years} </h5>
            <h5 className="font-semibold mt-2">Numbers of recipes: {card.totalRecipes}</h5>
            <div className="flex justify-between font-semibold mt-2 items-center">
                <p className="text-xl flex gap-2 font-bold">Likes: <FaThumbsUp className=" text-blue-600 text-2xl" />{card.likes}</p>
                <Link to={`/chef-recipes/${chefName}`}>
                    <button className=" text-base font-bold btn btn-primary">View Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;