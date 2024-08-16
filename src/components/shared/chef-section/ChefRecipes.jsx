import { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import RecipeInformation from './RecipeInformation';

const ChefRecipes = () => {
    const dynamic = useParams();
    const [recipes, setRecipes] = useState([]);
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch("/recipeInfo.json")
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])

    useEffect(() => {
        fetch("/chefCard.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    const recipe = recipes.find(terget => terget.chefName == dynamic.nameId);

    if (!recipe) {
        return <div className=' flex sm:mt-[25vh] mt-[20vh] w-full items-center justify-center'>            
            <p className='lg:text-5xl sm:text-3xl text-xl font-bold'>Loading </p>
            <span className="text-yellow-400 lg:mt-4 sm:mt-2 mt-[6px] ml-1  sm:ml-2 loading loading-dots lg:loading-lg sm:loading-md loading-sm"></span>
        </div >
    }
    return (
        <>
            <div className=' flex max-sm:flex-col items-center lg:gap-10 gap-6  w-[96%] mx-auto  mt-10'>
                <div>
                    <img className='sm:w-[450px] w-[400px] rounded-lg shadow-lg lg:h-[250px] sm:h-64 h-52' src={recipe.image} alt="chef image" />

                </div>
                <div className='sm:w-2/3 p-4 border-2 rounded-lg'>
                    <h5 className="lg:text-2xl text-xl font-bold">Chef Name: <span className="bg-[linear-gradient(90deg,#180a59_20%,#ffdd44,#a816bf_60%)] bg-clip-text text-transparent ">{recipe.chefName}</span>
                    </h5>
                    <p className="font-semibold text-justify mt-4">{recipe.bio}</p>
                    <p className=" flex items-center mt-2 gap-2 font-semibold">Likes: <FaThumbsUp className=" text-blue-500" />{recipe.likes}</p>
                    <p className="font-semibold mt-2">Numbers of recipes: {recipe.recipes}</p>
                    <p className="font-semibold mt-2">Years of experience: {recipe.years} </p>
                </div>
            </div>

            {/*--------- chef recipes information: --------*/}
            <div className='my-10 w-[96%] mx-auto '>
                <h3 className=" mx-auto text-center bg-[linear-gradient(40deg,#180a59_30%,#ffdd44,#a816bf_70%)] bg-clip-text text-transparent font-extrabold xl:text-4xl lg:text-3xl sm:text-2xl text-xl md:w-2/3 lg:h-[50px]">
                    Chef Recipes Information :
                </h3>
                <div className='grid lg:gap-10 sm:gap-6 gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-10'>
                    {infos.map((info, index) => {

                        return <RecipeInformation key={index} info={info}></RecipeInformation>
                    })}
                </div>
            </div>
        </>

    );
};

export default ChefRecipes;