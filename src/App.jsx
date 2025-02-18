import React from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import Player from './pages/Player';

const App = () => {
  return (
    <Router>
    <div>
      <h3>React Netflix Clone</h3>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>


    </div>
    </Router>
  )
}

export default App
