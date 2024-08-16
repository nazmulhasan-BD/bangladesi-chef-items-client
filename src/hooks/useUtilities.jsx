
import useAuth from "./useAuth";


const useUtilities = () => {

    const { setError } = useAuth();
    
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

    // password toggle ---------------------

   

    return [handleEmail, handlePassword]
};

export default useUtilities;