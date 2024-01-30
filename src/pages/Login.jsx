import React from 'react';
import { Link } from 'react-router-dom';
import SocialSignIn from './../components/social-button/SocialSignIn';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

    }
    return (
        <div className="hero bg-base-200">
            <div className="hero pt-3 bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Please Login!</h1>
                    </div>
                    <div className="card min-w-96 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className=" px-8 py-2">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log in</button>
                                <label className="label">
                                    <span>Have you no Account?</span>
                                    <Link to="/sign-up" className=" text-lg text-yellow-700 font-bold">Sign-up now!</Link>
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