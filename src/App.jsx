import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import SetPassword from './pages/SetPassword';
import Content from './pages/Content';
import Players from './pages/players';
import Player_Group from './pages/Player_Group';
import Health_Check from './pages/Health_Check';
import Regions from './pages/Regions';
import Report from './pages/Report';
import Platform from './pages/Platform';
import Region from './pages/Region';
import Broadcast from './pages/Broadcast';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/content" element={<Content />} />
            <Route path="/players" element={<Players />} />
            <Route path="/player_group" element={<Player_Group />} />
            <Route path="/health_check" element={<Health_Check />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/report" element={<Report />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/region" element={<Region />} />
            <Route path="/broadcast" element={<Broadcast />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;