import React from 'react';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome back 👋</h1>
        {/* Placeholder for actual user data */}
        <div className="data-cards">
          <div className="card">Calories Tracked</div>
          <div className="card">Workouts</div>
          <div className="card">Goals</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
