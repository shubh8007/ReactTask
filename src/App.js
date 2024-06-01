import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]); // For admin users

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    // Implement login logic (e.g., authenticate against a database)
    if (username === 'admin' && password === 'admin') {
      setCurrentUser({ username, role: 'admin' });
      setIsLoggedIn(true);
      localStorage.setItem('currentUser', JSON.stringify({ username, role: 'admin' }));
    } else {
      // Handle invalid login attempt
    }
  };

  const handleRegistration = (newUser) => {
    // Implement user registration logic (e.g., store in a database)
    setUsers([...users, newUser]); // Add new user to local state (for demo)
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('currentUser');
  };

  const deleteUser = (userId) => {
    // Implement logic to delete user from database or local state (for demo)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const createUser = (newUser) => {
    // Implement logic to create user in database or local state (for demo)
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser, userId) => {
    // Implement logic to update user in database or local state (for demo)
    const newUsers = users.map((user) => (user.id === userId ? updatedUser : user));
    setUsers(newUsers);
  };

  return (
    <Router>
      <div className="App">
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/register" element={<RegistrationForm onRegistration={handleRegistration} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard username={currentUser.username} onLogout={handleLogout} currentUser={currentUser} />} />
            <Route path="/profile" element={<UserProfile user={currentUser} />} />
            <Route path="/admin/users" element={<UserList users={users} onDeleteUser={deleteUser} />} />
            <Route path="/admin/users/create" element={<UserForm onUserSubmit={createUser} />} />
            <Route path="/admin/users/:userId/edit" element={<UserForm onUserSubmit={updateUser} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
