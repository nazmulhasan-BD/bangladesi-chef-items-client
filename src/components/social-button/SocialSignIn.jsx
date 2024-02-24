/* eslint-disable react/prop-types */

import { FaGithubSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialSignIn = ({children}) => {
    return (
        <div>
            <div className="divider  mb-0 divider-primary">
                <h3>Directly {children} with</h3>
            </div>
            <div className=' flex justify-center pt-5 pb-3 gap-8'>
                <Link className='text-2xl p-2 hover:bg-yellow-400 border-blue-500 border-2 rounded-lg'>
                    <FaGoogle></FaGoogle>
                </Link>
                <Link className='text-2xl p-2 hover:bg-yellow-400 border-blue-500 border-2 rounded-lg'>
                    <FaGithubSquare></FaGithubSquare>
                </Link>
            </div>
        </div>
    );
};

export default SocialSignIn;