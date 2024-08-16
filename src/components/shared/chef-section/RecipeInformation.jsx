/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";


const RecipeInformation = ({ info }) => {
    const [favorite, setFavorite] = useState(false)
    const handleFavorite = (recipeName) => {
        setFavorite(!favorite)
        Swal.fire({
            position: "center",
            icon: "success",
            title: 'The recipe ' + recipeName + ' is your favorite',
            color: "blue",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                title: 'text-lg',
                content: 'text-md' 
            }
        });
    }

    return (
        <div className='border-2 mx-auto max-w-[420px] w-full flex flex-col rounded-xl shadow-lg bg-blue-100 xl:p-6 p-4'>
            <div className="md:text-xl text-lg flex justify-between items-center font-bold">
                <h5>
                    Recipe : <span className='text-[#5daa26]'>{info.recipeName}</span>
                </h5>
                {/* favorite icon............ */}
                <button onClick={() => handleFavorite(info.recipeName)} disabled={favorite}><FaHeart className={` lg:text-3xl text-2xl ${favorite ? " text-blue-600" : "text-gray-500"}`} /></button>
            </div>
            <h5 className=" mt-6 mb-2 font-bold">
                Ingredients:
            </h5>
            <p>
                {info.ingredients.map((ing, index) => (
                    <span key={index}>{ing + "," + " "}</span>
                ))}
            </p>
            <h5 className="font-bold mt-3">
                Cooking method:
            </h5>
            <ol className='list-decimal'>
                {
                    info.method.map((step, index) => (
                        <li className="mt-2 ml-4" key={index}>{step}</li>
                    ))
                }
            </ol>
            <div className=" flex justify-between items-center lg:text-xl pt-2 text-blue-600 mt-auto font-bold ">
                <h5 className="text-blue-600 font-bold">
                    Rating: {info.rating}
                </h5>
                <Rating
                    className=" p-0"
                    readonly
                    placeholderRating={info.rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}>
                </Rating>
            </div>
        </div>
    );
};

export default RecipeInformation;