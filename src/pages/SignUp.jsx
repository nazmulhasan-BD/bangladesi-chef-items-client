import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

    }
    return (
        <div className="hero pt-3 bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Sign up!</h1>
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
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" name="url" placeholder="your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Sign-up</button>
                            <label className="label">
                                <span>Al-ready have an account ?</span>
                                <Link to="/log-in" className=" text-lg text-yellow-700 font-bold">Please Login!</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;