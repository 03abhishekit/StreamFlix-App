import React from 'react'
import './HomePage.css'
import NavBar from '../components/NavBar'
import banner from '../assets/hero_banner.jpg';
import title from '../assets/hero_title.png';
import play from '../assets/play_icon.png';
import info from '../assets/info_icon.png';
import TitleCard from '../components/TitleCard';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div  className='home' >
       <NavBar/>
       <div className="hero">
        <img src={banner} alt="" className='banner-img' />
        <div className="hero-caption">
            <img src={title} alt="" className='caption-img' />
            <p>Unlimited movies and tv shows</p>

            <div className="hero-btns">
                <button className='btn' ><img src={play} alt="" />Play</button>
                <button className='btn dark-btn' ><img src={info} alt="" />More Info</button>
            </div>
            <TitleCard/>

        </div>
       </div>
       <div className="more-cards">
       <TitleCard title={"Blockbuster Movies"} category={"popular"} />
       <TitleCard title={"Only on Netflix"}  category={"top_rated"} />
       <TitleCard title={"Upcoming"}  category={"upcoming"} />
       <TitleCard title={"Top picks for you"}  category={"now_playing"} />
       </div>
       <Footer/>
    </div>
  )
}

export default HomePage
