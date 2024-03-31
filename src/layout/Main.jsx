
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from './../components/shared/footer/Footer';
import ScrollToTop from '../hooks/useScrollToTop';

const Main = () => {

    return (
        <div className='my-container flex flex-col min-h-screen '>
            <Navbar></Navbar>
            <div className='flex-grow' >
                <ScrollToTop></ScrollToTop>
                <Outlet></Outlet>
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Main;