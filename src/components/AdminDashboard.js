import React, { useState, useEffect } from 'react';
import UserTable from './UserList';
import '../';
function AdminDashboard() {
  const username = localStorage.getItem('username');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(users);
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, {username}</p>
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
}

export default AdminDashboard;
