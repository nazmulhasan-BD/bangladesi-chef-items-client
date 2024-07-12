import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Vortex } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className=' flex mt-24  justify-center'>
            <p className='text-5xl font-bold'>L</p>
            <p className='mt-[10px]'>
                <Vortex
                    visible={true}
                    height="42"
                    width="40"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'blue', 'green', 'yellow', 'white', 'orange', 'purple']}
                />
            </p>
            <p className='text-5xl font-bold'>ading </p>
            <span className="text-yellow-400 mt-3 ml-2 loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location} ></Navigate>
};

export default PrivateRoute;