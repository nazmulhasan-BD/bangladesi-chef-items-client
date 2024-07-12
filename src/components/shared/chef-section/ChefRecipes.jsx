import { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Vortex } from 'react-loader-spinner';
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
        return <div className=' flex mt-24  justify-center'>
            <p className='text-5xl font-bold'>L</p>
            <p className='mt-[10px]'>
                <Vortex
                    visible={true}
                    height="42"
                    width="40"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'blue', 'green', 'yellow', 'white', 'orange', 'purple']}
                />
            </p>
            <p className='text-5xl font-bold'>ading </p>
            <span className="text-yellow-400 mt-3 ml-2 loading loading-dots loading-lg"></span>
        </div>
    }
    return (
        <>
            <div className=' flex items-center gap-10  w-[85%] mx-auto  mt-10'>
                <div>
                    <img className='w-[450px] rounded-lg shadow-lg h-[274px]' src={recipe.image} alt="chef image" />

                </div>
                <div className='w-2/3 p-4 border-2 rounded-lg'>
                    <h5 className="text-2xl font-bold">Chef Name: <span className="bg-[linear-gradient(90deg,#180a59_20%,#ffdd44,#a816bf_60%)] bg-clip-text text-transparent ">{recipe.chefName}</span>
                    </h5>
                    <p className="font-semibold text-justify mt-4">{recipe.bio}</p>
                    <p className=" flex items-center mt-2 gap-2 font-semibold">Likes: <FaThumbsUp className=" text-blue-500" />{recipe.likes}</p>
                    <p className="font-semibold mt-2">Numbers of recipes: {recipe.recipes}</p>
                    <p className="font-semibold mt-2">Years of experience: {recipe.years} </p>
                </div>
            </div>

            {/*--------- chef recipes information: --------*/}
            <div className='my-10'>
                <h3 className=" mx-auto text-center bg-[linear-gradient(40deg,#180a59_30%,#ffdd44,#a816bf_70%)] bg-clip-text text-transparent font-extrabold text-4xl w-2/3 h-[50px]">
                    Chef Recipes Information :
                </h3>
                <div className='grid gap-10 grid-cols-3 mt-10'>
                    {infos.map((info, index) => {

                        return <RecipeInformation key={index} info={info}></RecipeInformation>
                    })}
                </div>
            </div>
        </>

    );
};

export default ChefRecipes;