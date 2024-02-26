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
    height: "500px",
};

    return (
    <div style={bgImage} data-aos="zoom-in" data-aos-duration="700" className='h-[400px] transition-all w-full'></div>
  )
}

export default BannerImg
