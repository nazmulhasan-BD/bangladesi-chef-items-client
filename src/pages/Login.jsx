import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignIn from './../components/social-button/SocialSignIn';
import useAuth from '../hooks/useAuth';
import useUtilities from '../hooks/useUtilities';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [handleEmail, handlePassword] = useUtilities();
    const { signInUser, setLoading, error, setError } = useAuth();
    const [isload, setLoad] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    const handleLogIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value;
        setLoad(true);
        signInUser(email, password)
            .then(() => {
                setError("");
                form.reset();
                Swal.fire({
                    position: "center",
                    color: "blue",
                    icon: "success",
                    title: "Login successful !",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        title: 'text-lg',
                        content: 'text-md'
                    }
                });
                navigate(location?.state?.pathname || "/");
            })
            .catch((er) => {
                if (er) {
                    console.log(error);
                    setError("Invalid email or password, please try again!")
                }
                setLoading(false);
                setLoad(false);
            });
    }

    return (
        <div className="w-full px-2 bg-slate-300 py-5">
            <div className="text-center ">
                <h1 className="lg:text-3xl sm:text-2xl mb-4 text-xl font-bold">Please Login!</h1>
            </div>
            <div className="card mx-auto shadow-2xl lg:max-w-[400px] lt:max-w-[350px] max-w-[320px] border border-blue-800 bg-base-100">
                <form onSubmit={handleLogIn} className=" lt:px-8 px-4 pt-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="md:text-lg font-semibold">Email</span>
                        </label>
                        <input onChange={handleEmail} type="email" name='email' placeholder="email" className="input  sm:h-12 h-10 md:text-lg input-bordered" required />

                        <label className="label">
                            <span className="md:text-lg font-semibold">Password</span>
                        </label>
                        <div className='relative'>
                            <input onChange={handlePassword} type={visible? "text":"password"}  name='password' placeholder="password" className="input w-full sm:h-12 h-10 md:text-lg input-bordered" required />
                            <span onClick={()=>setVisible(!visible)}  className=' right-7 top-4 absolute cursor-pointer'>
                            {visible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* ---- error handle -------- */}
                        {error &&
                            <p className='text-red-600 italic text-center pt-3 font-bold'>{error}
                            </p>
                        }
                    </div>

                    <div className="form-control mt-5">
                        {
                            !isload ?
                                <button type="submit" disabled={error} className={error ? "bg-blue-400 text-sm text-white sm:py-3 py-[9px] px-4 rounded-lg cursor-not-allowed" : " bg-blue-700 sm:p-3 py-[9px] text-white md:text-lg font-semibold rounded-lg"}>Log in</button>
                                :
                                <button className="btn btn-primary"><span className="loading loading-spinner loading-sm"></span>
                                </button>
                        }
                        <label className="label">
                            <span className='font-semibold'>No account yet?</span>
                            <Link to="/signup" state={location.state} className=" lt:text-lg text-yellow-700 font-bold"> Register here!</Link>
                        </label>
                    </div>
                </form>
                {/* Social log in section here ----------- */}
                <div className='px-9'>
                    <SocialSignIn>Sign in</SocialSignIn>
                </div>
            </div>

        </div>
    );
};

export default Login;