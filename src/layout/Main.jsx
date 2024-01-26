
import Home from './../pages/Home';
import Navbar from '../components/shared/navbar/Navbar';

const Main = () => {
    return (
        <div className='my-container border'>
            <Navbar></Navbar>
            <Home></Home>
            {/* Outlet here */}
            {/* footer here */}
        </div>
    );
};

export default Main;