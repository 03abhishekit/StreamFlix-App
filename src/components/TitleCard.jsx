import React, { useEffect, useRef, useState } from 'react'
import  cards  from '../assets/cards/Cards_data'
import './TitleCard.css'
import { Link } from 'react-router-dom'


const TitleCard = ({title, category}) => {

const[apiData, setApiData] = useState([]);

const cardRef = useRef();

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI1YWFkODEzYmE3NTE3YWRjNTgxMzNlM2ZkNmNjZCIsIm5iZiI6MTczOTg5Mjg4Ny42NTYsInN1YiI6IjY3YjRhODk3NWFjYTVhNzFkMmEwMDg5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjicUJHWa2ujJyjxrBf8H_Ln_jtsKoUOrqlKrefrjKQ'
    }
  };
  
  

const handleWheel = (event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY * 0.5;
}
useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res?.json())
    .then(res => setApiData(res?.results) )
    .catch(err => console.error(err));

    const ref = cardRef.current;
    ref.addEventListener('wheel', handleWheel);
    return()=> {
        ref.removeEventListener('wheel', handleWheel);
    }
},[])

  return (
    <div className='title-cards'>
        <h3>{title? title : <p>Popular On Streamflix</p> }</h3>
       <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) =>{
            return <Link to={`/player/${card.id}`} className='card' key={index}>
                <img src={ `https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                 <p>{card.original_title}</p>

                 </Link>
        })
        }
       </div>
    </div>
  )
}

export default TitleCard
