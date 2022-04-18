import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/User/Dashboard'
import Home from './pages/User/Home';
import Profile from './pages/User/Profile';


const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/belajar-pppk' element={<Home />} />
            <Route exact path='/program-pemantapan/skd' element={<Profile />} />
            <Route exact path='/program-pemantapan/skb' element={<Home />} />
        </Routes>

    )
}

export default App
