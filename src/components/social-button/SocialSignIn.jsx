import React from 'react';
import { FaGithubSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialSignIn = ({children}) => {
    return (
        <div>
            <div className="divider mt-2 mb-0 divider-primary">
                <h3>Directly {children} with</h3>
            </div>
            <div className=' flex justify-center pt-3 gap-5'>
                <Link className='text-2xl p-2 hover:bg-yellow-500 border-2'>
                    <FaGoogle></FaGoogle>
                </Link>
                <Link className='text-2xl p-2 hover:bg-yellow-500 border-2'>
                    <FaGithubSquare></FaGithubSquare>
                </Link>
            </div>
        </div>
    );
};

export default SocialSignIn;