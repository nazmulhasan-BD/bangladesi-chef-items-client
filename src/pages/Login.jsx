import React from 'react';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
    }
    return (
        <div className="hero pt-5 bg-base-200">
            
        </div>
    );
};

export default Login;