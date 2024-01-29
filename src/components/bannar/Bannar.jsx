import React, { useContext } from 'react';
import { UserContext } from '../../provider/UserProvider';
// import bannar_img from '../../assets/bannar.jpg'

const Bannar = () => {
  const user = useContext(UserContext)
    return (
        <div className='bg-[url(src/assets/bannar.jpg)] h-[60vh] bg-cover bg-no-repeat'>
          <h2 className=' h-full bg-slate-100 bg-opacity-20 text-3xl font-bold'> {user.name} </h2>
        </div>
    );
};

export default Bannar;