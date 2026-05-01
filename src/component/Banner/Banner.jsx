import React from 'react';
import BanImg from './../../assets/bg-shadow.png';
import cricketImg from './../../assets/banner-main.png';

const Banner = () => {
    return (
<>
    <div className='rounded-2xl bg-black/80  overflow-hidden bg-cover p-5 m-5  bg-center' 
    style={{ backgroundImage: `url(${BanImg})` }} >


      <div className="px-6 py-16 flex flex-col items-center text-center">

        <img
          src={cricketImg}
          alt="cricket"
          className="w-40 mb-6"
        />
    <span> <p className='text-[#FFFFFF] font-bold font-sora' >Assemble Your Ultimate Dream 11 Cricket Team </p> </span>

    <span className='text-[#FFFFFF]/70 font-sm  font-inter' >Beyond Boundaries Beyond Limits</span>

    <div className='pt-5 '>
        <button className='btn bg-[#E7FE29] text-black font-semibold border-black border-3   shadow-[0_0_10px_#a3e635]   rounded-xl'> Claim Free Credit  </button>
    </div>

            
        </div>



       




</div>




</>
    );
};

export default Banner;