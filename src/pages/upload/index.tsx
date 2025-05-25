import React from 'react'
import HeroScan from "../../components/upload/HeroScan";
import MemoriesSection from "../../components/upload/MemoriesSection";
import Footer from "../../components/upload/Footer";
import MobileOnlyLayout from '../../layout/MobileOnlyLayout'

const Onboard = () => {
    

  const handleUpload = () => {
    console.log('Upload memory clicked');
  };

  return (
    <MobileOnlyLayout>
      <HeroScan  onUpload={handleUpload} />
      <MemoriesSection/>
<Footer/>
    </MobileOnlyLayout>
  )
}

export default Onboard
