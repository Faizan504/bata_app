import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardIcon from '@mui/icons-material/FastForward';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PublicIcon from '@mui/icons-material/Public';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import BookIcon from '@mui/icons-material/Book';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed w-16 bg-gray-400 text-white flex flex-col items-center py-24 space-y-4 h-screen">
      <Link to="/">
        <DashboardIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/content">
        <InventoryIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/content') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/players">
        <PlayArrowIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/players') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/player_group">
        <FastForwardIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/player_group') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/health_check">
        <AssignmentIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/health_check') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/regions">
        <PublicIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/regions') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/report">
        <ContentPasteIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/report') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/platform">
        <BookIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/platform') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/region">
        <LocationOnIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/region') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
      <Link to="/broadcast">
        <LiveTvIcon
          fontSize="large"
          className={`hover:text-red-600 ${isActive('/broadcast') ? 'text-red-600' : 'text-gray-300'}`}
        />
      </Link>
    </aside>
  );
};

export default Sidebar;
