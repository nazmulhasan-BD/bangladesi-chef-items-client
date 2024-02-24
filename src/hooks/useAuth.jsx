import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";

const useAuth = () => {
    return  useContext(UserContext);
}

export default useAuth;