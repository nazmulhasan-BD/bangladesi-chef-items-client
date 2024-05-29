/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";


const RecipeInformation = ({ info }) => {
    const [favorite, setFavorite]= useState(false)
    const haha =(recipeName)=>{
        setFavorite(!favorite)
        Swal.fire({
            position: "center",
            icon: "success",
            title: 'The recipe '+ recipeName +' is your favorite',
            showConfirmButton: false,
            timer: 1500
          });
    }

    return (

        <>
            <div className='border-2 rounded-xl shadow-lg bg-blue-100 p-6'>
                <div className="text-xl flex justify-between items-center font-bold">
                    <h5>
                        Recipe name: <span className='text-[#5daa26]'>{info.recipeName}</span>
                    </h5>
                    {/* favorite icon............ */}
                    <button onClick={()=>haha(info.recipeName)} disabled={favorite}><FaHeart className={` text-3xl ${favorite ? " text-blue-600":"text-gray-500"}`} /></button>
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
                <div className=" flex justify-between items-center text-xl text-blue-600 mt-3 font-bold">
                    <h5 className="text-blue-600 font-bold">
                        Rating: {info.rating}
                    </h5>
                    <Rating
                    readonly
                    placeholderRating={info.rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}>
                    </Rating>
                </div>
            </div>
        </>
    );
};

export default RecipeInformation;