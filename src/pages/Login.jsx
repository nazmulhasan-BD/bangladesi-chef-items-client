import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialSignIn from './../components/social-button/SocialSignIn';
import useAuth from '../hooks/useAuth';
import useUtilities from '../hooks/useUtilities';

const Login = () => {
    const [handleEmail, handlePassword, error, setError] = useUtilities();
    const { signInUser, setLoading } = useAuth();
    const [isload, setLoad] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
        <div className="hero bg-base-200">
            <div className="hero pt-3 bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card min-w-96 shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className=" px-8 py-2">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={handleEmail} type="email" name='email' placeholder="email" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" required />

                                {/* ---- error handle -------- */}
                                {error &&
                                    <p className='text-red-600 italic text-center pt-3 font-bold'>{error}
                                    </p>
                                }
                            </div>

                            <div className="form-control mt-6">
                                {
                                    !isload ?
                                        <button type="submit" disabled={error} className={error ? "bg-blue-400 text-sm text-white py-3 px-4 rounded-lg cursor-not-allowed" : "btn btn-primary"}>Log in</button>
                                        :
                                        <button className="btn btn-primary"><span className="loading loading-spinner loading-sm"></span>
                                        </button>
                                }
                                <label className="label">
                                    <span>Have you no Account?</span>
                                    <Link to="/signup" className=" text-lg text-yellow-700 font-bold">Sign-up now!</Link>
                                </label>
                            </div>
                            {/* Social log in section here ----------- */}
                            <SocialSignIn> log in </SocialSignIn>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;