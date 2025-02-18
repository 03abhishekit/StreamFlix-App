import React, { useEffect, useState } from 'react'
import './Player.css'
import back_icon from '../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const[data, setData] = useState({
    name : "",
    key : "",
    published_at: "",
    type : ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI1YWFkODEzYmE3NTE3YWRjNTgxMzNlM2ZkNmNjZCIsIm5iZiI6MTczOTg5Mjg4Ny42NTYsInN1YiI6IjY3YjRhODk3NWFjYTVhNzFkMmEwMDg5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IjicUJHWa2ujJyjxrBf8H_Ln_jtsKoUOrqlKrefrjKQ'
    }
  };
  
  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setData(res.results[0]))
    .catch(err => console.error(err));
  }, [])
  
  return (
    <div className='player' >
      <img src={back_icon} alt="" onClick={() =>{navigate(-2)}} />
      <iframe width={'90%'} height={'90%'} src={`https://www.youtube.com/embed/${data.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>{data.published_at.slice(0, 10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  )
}

export default Player
