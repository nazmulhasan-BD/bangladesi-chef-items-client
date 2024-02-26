
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from './../components/shared/footer/Footer';
import ScrollToTop from '../hooks/useScrollToTop';

const Main = () => {

    return (
        <div className='my-container '>
            <Navbar></Navbar>
            <div className='' >
                <ScrollToTop></ScrollToTop>
                <Outlet></Outlet>
            </div>
            <div className='max-w-[1340px] w-full  mx-auto'>
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Main;