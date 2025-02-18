import React, { useEffect, useRef } from 'react'
import './NavBar.css';
import logo from '../assets/logo.png';
import search from '../assets/search_icon.svg';
import bell_icons from '../assets/bell_icon.svg';
import profile from '../assets/profile_img.png';
import caret_icons from '../assets/caret_icon.svg';
const NavBar = () => {
  const navRef = useRef();
  useEffect(() =>{
      window.addEventListener('scrollY', ()=>{
        if(window.scrollY >= 80){
          navRef.current.classList.add('nav-dark')
        }else{
          navRef.current.classList.remove('nav-dark')
        }
      })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <h3>Navbar</h3>

      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My Lists</li>
            <li>Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
            <img src={search} alt="" className='icons' />
            <p>Children</p>
            <img src={bell_icons} alt="" className='icons' />

           <div className="navnar-profile">
           <img src={profile} alt="" className='profile' />
           <img src={caret_icons} alt="" className='profile' />

           <div className="dropdown">
            <p>SignOut of Netflix</p>
           </div>
           </div>
      </div>
    </div>
  )
}

export default NavBar
