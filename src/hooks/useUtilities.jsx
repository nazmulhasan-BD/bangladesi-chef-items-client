import { useState } from 'react';

const useUtilities = () => {
    const [error, setError] = useState("");
    //  password validation ------------- 

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        if (passwordInput.length == 0) {
            setError("");
        }
        else if (passwordInput.length < 6) {
            setError("Password must be at least 6 characters long");
        }
        else {
            setError("");
        }
    };

    // email validation -----------------

    const handleEmail = (e) => {
        const emailInput = e.target.value;
        if (emailInput.length == 0) {
            setError("");
        }
        else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInput)) {
            setError("Please provide a valid email");
        }
        else {
            setError("");
        }
    };
    return [handleEmail, handlePassword, error, setError]
};

export default useUtilities;