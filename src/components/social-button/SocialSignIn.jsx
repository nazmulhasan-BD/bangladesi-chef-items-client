/* eslint-disable react/prop-types */

import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithubSquare, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const SocialSignIn = ({children}) => {

    const {googleSignUp, githubSignUp} = useAuth();
    // google sign in method 
    const handleGoogle = ()=>{
        googleSignUp(googleProvider)
        .then((result) => {
            console.log(result?.user);
          }).catch((error) => {
            // Handle Errors here.
          
            // ...
            console.log(error);
          });
    }

    // google sign in method 
    const handleGithub = ()=>{
        githubSignUp(githubProvider)
        .then((result) => {
            console.log(result?.user);
          }).catch((error) => {
            // Handle Errors here.
          
            // ...
            console.log(error);
          });
    }

    return (
        <div>
            <div className="divider  mb-0 divider-primary">
                <h3>Directly {children} with</h3>
            </div>
            <div className=' flex justify-center pt-5 pb-3 gap-8'>
                <button onClick={handleGoogle} className='text-2xl p-2 hover:bg-yellow-400 border-blue-500 border-2 rounded-lg'>
                    <FaGoogle></FaGoogle>
                </button>
                <button onClick={handleGithub} className='text-2xl p-2 hover:bg-yellow-400 border-blue-500 border-2 rounded-lg'>
                    <FaGithubSquare></FaGithubSquare>
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;