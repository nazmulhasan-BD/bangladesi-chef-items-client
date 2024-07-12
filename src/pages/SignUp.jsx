import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignIn from './../components/social-button/SocialSignIn';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import useUtilities from '../hooks/useUtilities';
import { useState } from 'react';

const SignUp = () => {
    const { createUser, updateUser, logOut, setLoading, error, setError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [handleEmail, handlePassword] = useUtilities();
    const [isload, setLoad] = useState(false);
    

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
                    title: "registation successful",
                    showConfirmButton: false,
                    timer: 2000
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
        <div className="hero bg-base-200">
            <div className="hero-content flex-col gap-8 mt-10 lg:flex-row-reverse">
                <div className="text-center w-[300px] p-6  rounded-s-full bg-white">
                    <h1 className="text-3xl font-bold mb-10">
                        Please Sign up!
                    </h1>
                    {/* social sing in component */}
                    <SocialSignIn> sign up </SocialSignIn>
                </div>
                <div className="card min-w-96 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body py-2">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmail} type="email" name='email' placeholder="email" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name="url" placeholder="your photo url" className="input input-bordered" required />
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
                                    <button type="submit" disabled={error} className={error ? "bg-blue-400 text-sm text-white py-3 px-4 rounded-lg cursor-not-allowed" : "btn btn-primary"}>Sign-up</button>
                                    :
                                    <button className="btn btn-primary"><span className="loading loading-spinner loading-sm"></span>
                                    </button>
                            }
                            <label className="label">
                                <span>Al-ready have an account ?</span>
                                <Link to="/login" className=" text-lg text-yellow-700 font-bold">Please Login!</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;