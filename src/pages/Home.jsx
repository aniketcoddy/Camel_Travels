import React from 'react'
import MainVid from ".././assets/video/main.mp4";
import Hero from '../components/Hero/Hero';
import PLaces from '../components/Places/PLaces';
import BannerImg from '../components/Banner/BannerImg';
import banImage from "../assets/cover-women.jpg"
import Blogs from './Blogs';
import AniPost from '../components/AnimatePoster/AniPost';
import banImg2 from "../assets/travel-cover2.jpg"
import Testimonails from '../components/Testimonials/Testimonails';

const Home = () => {
  return (
    <div>
      <div className='relative h-[700px]'>
        <video autoPlay muted loop className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
             <source src={MainVid} type="video/mp4"/>
        </video>
        <Hero/>
      </div>
      <PLaces/>
      <BannerImg img = {banImage}/>
      <Blogs/>
      <AniPost/>
      <BannerImg img = {banImg2}/>
    </div>
  )
}

export default Home
