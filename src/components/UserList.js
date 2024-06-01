import React, { useState } from 'react';

function UserList({ users, onDeleteUser, onBackToDashboard }) {
  const [deleteUserModalOpen, setDeleteUserModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleDeleteUser = (userId) => {
    setUserIdToDelete(userId);
    setDeleteUserModalOpen(true);
  };

  const confirmDeleteUser = () => {
    
    onDeleteUser(userIdToDelete);
    setDeleteUserModalOpen(false);
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deleteUserModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete this user?</h3>
            <button onClick={confirmDeleteUser}>Yes</button>
            <button onClick={() => setDeleteUserModalOpen(false)}>No</button>
          </div>
        </div>
      )}
      <button onClick={onBackToDashboard}>Back to Dashboard</button>
    </div>
  );
}

export default UserList;
