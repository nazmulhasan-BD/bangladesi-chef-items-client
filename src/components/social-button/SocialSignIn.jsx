/* eslint-disable react/prop-types */

import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithubSquare, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialSignIn = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const { googleSignUp, githubSignUp, setLoading, updateUser, setError, user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    // google sign in method 
    const handleGoogle = () => {
        setLoading(true);
        setError("");
        googleSignUp(googleProvider)
            .then(() => {
                setLoading(true);
                updateUser(user?.displayName, user?.photoURL)
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error.code)
                        setLoading(false);
                    })
                navigate(location?.state?.pathname || "/");
                Swal.fire({
                    position: "center",
                    color: "blue",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        title: 'text-lg',
                        content: 'text-md'
                    }
                });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                if (error) {
                    setError("Error: popup-closed-by-user, try again !")
                }
            });
    }

    // github sign in method 
    const handleGithub = () => {
        setLoading(true);
        setError("");
        githubSignUp(githubProvider)
            .then(() => {
                setLoading(true);
                updateUser(user?.displayName, user?.photoURL)
                    .then(() => {

                    })
                    .catch(error => {
                        setError(error.code)
                        setLoading(false);
                    })
                navigate(location?.state?.pathname || "/");
                Swal.fire({
                    position: "center",
                    color: "blue",
                    icon: "success",
                    title: "Login successful",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        title: 'text-lg',
                        content: 'text-md'
                    }
                });
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                if (error) {
                    setError("Error: popup-closed-by-user, try again !")
                }
            });
    }

    return (
        <div>
            <div className="divider  mb-0 divider-primary">
                <h3 className='font-semibold'>{children} with</h3>
            </div>
            <div className=' flex justify-center sm:pt-5 pt-3 pb-3 gap-8'>
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