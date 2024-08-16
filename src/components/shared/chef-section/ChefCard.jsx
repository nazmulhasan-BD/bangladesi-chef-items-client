/* eslint-disable react/prop-types */

import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChefCard = ({ card }) => {
    const {chefName} = card;

    return (
        <div className="border-2 rounded-2xl h-full mx-auto sm:p-6 p-4 shadow-xl md:shadow-2xl ">
            <img src={card.image} alt="chef image" className=" sm:h-[200px] sm:w-[320px] h-36 w-[240px]  rounded-t-2xl" />
            <h5 className="md:text-xl sm:text-lg font-bold mt-7">Chef Name: <span className="text-[#1ad609] ml-2"> {card.chefName}</span></h5>
            <h5 className="font-semibold mt-2">Years of experience: {card.years} </h5>
            <h5 className="font-semibold mt-2">Numbers of recipes: {card.totalRecipes}</h5>
            <div className="flex justify-between font-semibold mt-2 items-center">
                <p className="md:text-xl  flex gap-2 font-bold">Likes: <FaThumbsUp className=" text-blue-600 text-xl md:text-2xl" />{card.likes}</p>
                <Link to={`/chef-recipes/${chefName}`}>
                    <button className=" sm:text-base text-sm rounded-lg font-semibold bg-blue-700 text-white p-2 ">View Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default ChefCard;