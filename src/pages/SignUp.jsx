import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignIn from './../components/social-button/SocialSignIn';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import useUtilities from '../hooks/useUtilities';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    const { createUser, updateUser, logOut, setLoading, error, setError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [handleEmail, handlePassword] = useUtilities();
    const [isload, setLoad] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.url.value;
        setLoad(true);

        createUser(email, password)
            .then(() => {
                setLoading(true);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "registation successful !",
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        title: 'text-lg',
                        content: 'text-md'
                    }
                });

                logOut()
                    .then(() => {
                        navigate(location?.state?.pathname || "/login");
                    })
                    .catch(error => {
                        setError(error.code)
                    })

                // updated user......
                updateUser(name, photo)
                    .then(() => {
                        form.reset()
                        setLoading(false);
                        setLoad(false);
                    })
                    .catch(error => {
                        setError(error.code)
                    })
            })
            .catch((error) => {
                if (error) {
                    setError("User email already exist, please login!")
                }
                setLoading(false);
                setLoad(false);
            });
    }
    return (
        <div className="bg-slate-300  sm:flex justify-center items-center md:gap-8 gap-4  py-5 flex-row-reverse">
            <div className="text-center max-sm:mx-auto  lt:max-w-[340px] max-w-[320px] w-full  max-sm:mb-4 sm:p-8 p-4 border border-blue-800  rounded-s-full bg-white">
                <h1 className="lg:text-3xl sm:text-2xl text-xl font-bold">
                    Please Sign up!
                </h1>
                {/* social sing in component */}
                <SocialSignIn>Sign up </SocialSignIn>
            </div>
            <div className="card max-sm:mx-auto shadow-2xl lg:max-w-[400px] lt:max-w-[340px] max-w-[320px] w-full  bg-base-100 border border-blue-800">
                <form onSubmit={handleSubmit} className=" lt:px-8 px-4 py-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="md:text-lg font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input  sm:h-12 h-10 md:text-lg input-bordered" required />

                        <label className="label">
                            <span className="md:text-lg font-semibold">Email</span>
                        </label>
                        <input onChange={handleEmail} type="email" name='email' placeholder="email" className="input sm:h-12 h-10 md:text-lg input-bordered" required />

                        <label className="label">
                            <span className="md:text-lg font-semibold">Password</span>
                        </label>
                        <div className='relative'>
                            <input onChange={handlePassword} type={visible? "text":"password"}  name='password' placeholder="password" className="input w-full sm:h-12 h-10 md:text-lg input-bordered" required />
                            <span onClick={()=>setVisible(!visible)}  className=' right-7 top-4 absolute cursor-pointer'>
                            {visible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <label className="label">
                            <span className="md:text-lg font-semibold">Photo Url</span>
                        </label>
                        <input type="url" name="url" placeholder="your photo url" className="input sm:h-12 h-10 md:text-lg input-bordered" required />
                        {/* ---- error handle -------- */}
                        {error &&
                            <p className='text-red-600 italic text-center pt-3 font-bold'>{error}
                            </p>
                        }
                    </div>
                    {/* loading spin when sign up  */}
                    <div className="form-control mt-4">
                        {
                            !isload ?
                                <button type="submit" disabled={error} className={error ? "bg-blue-400 text-sm text-white py-3 px-4 rounded-lg cursor-not-allowed" : "bg-blue-700 sm:p-3 py-[9px] text-white md:text-lg font-semibold rounded-lg"}>Sign-up</button>
                                :
                                <button className="btn btn-primary"><span className="loading loading-spinner loading-sm"></span>
                                </button>
                        }
                        <label className="label">
                            <span className='font-semibold'>Have an account ?</span>
                            <Link to="/login" className=" lg:text-lg text-yellow-700 font-bold">Login now!</Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;