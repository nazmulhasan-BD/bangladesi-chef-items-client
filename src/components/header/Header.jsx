// import bannar_img from '../../assets/bannar.jpg'

import useAuth from "../../hooks/useAuth";

const Header = () => {
  const {user} = useAuth();
  return (
    <div className='bg-[url(src/assets/bannar.jpg)] h-[80vh] w-full bg-cover bg-center '>
      <h2 className=' h-full text-slate-950 bg-red-950 bg-opacity-40 text-3xl font-bold'> {user?.displayName}
      </h2>
    </div>
  );
};

export default Header;