import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserProfile({ user }) {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>First Name</th>
            <td>{user.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{user.lastName}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Role</th>
            <td>{user.role}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={handleBackToDashboard}>Back to Dashboard</button>
    </div>
  );
}

export default UserProfile;
