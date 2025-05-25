import React from 'react';
import HeroImg from '../../assets/HeroImg.png'
import { MdOutlineCameraAlt  } from "react-icons/md";
import Button from '../Button'

 const HeroScan= ({   onUpload }) => {
  return (
      <section className="flex justify-center items-center  px-4  text-center min-h-[100vh]">
        <div>
        <div className="relative mx-auto mb-6 w-48 h-48">
          <img
                  src={HeroImg}
                  alt={'hero image'}
                /></div>

        <h1 className="text-xl font-semibold text-gray-900">
          Welcome Resurgent, I'm Kronos – the Custodian of Memories.
        </h1>
        <p className="mt-2 text-gray-600">Let me keep your prized moments</p>
        
        <Button Icon={MdOutlineCameraAlt} title={"Upload memory"} onClick={onUpload}/>
        </div>
      </section>

      
  );
};

export default HeroScan