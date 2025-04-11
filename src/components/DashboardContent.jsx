import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import './DashboardContent.css';

function DashboardContent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="dashboard-content">
      <h1>Welcome, {user?.email || 'User'} 👋</h1>
      <p>This is your personalized dashboard</p>
    </div>
  );
}

export default DashboardContent;
