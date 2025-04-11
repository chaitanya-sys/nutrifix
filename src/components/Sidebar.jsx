import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Nutrifix</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/calories">Calories</Link>
        <Link to="/dashboard/workouts">Workouts</Link>
        <Link to="/dashboard/goals">Goals</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
