import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ username, onLogout, currentUser }) {
  if (!username) {
    return <p>Error: User not logged in.</p>;
  }

  return (
    <div className="container">
      <h1>Welcome, {username}</h1>
      <p>
        You are currently logged in as a {currentUser.role}.
      </p>
      <Link to="/profile">View Profile</Link>
      {currentUser.role === 'admin' && (
        <Link to="/admin/users">Manage Users</Link>
      )}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
