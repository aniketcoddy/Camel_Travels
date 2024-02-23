import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const BannerImg = ({img}) => {


    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);

const bgImage = {
    backgroundImage : `url(${img})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    height: "400px"
};

    return (
    <div style={bgImage} data-aos="zoom-in" className='h-[400px] w-full'></div>
  )
}

export default BannerImg
