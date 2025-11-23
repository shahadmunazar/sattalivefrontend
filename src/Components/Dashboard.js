// src/Components/Dashboard.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
// import Home from './Home'; // Add your other components here
import MainHome from './MainHome';
import UserList from './UserList';
import Category from './Category';

const Users = () => <div>Users Content</div>;
const Settings = () => <div>Settings Content</div>;
const Reports = () => <div>Reports Content</div>;
const Profile = () => <div>Profile Content</div>;

const Dashboard = () => {
  return (
    <div className="admin-panel">
      <header className="header">
        <h1>Admin Panel</h1>
      </header>
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/admin">Home</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/settings">Open Number</Link></li>
            <li><Link to="/admin/category">Category</Link></li>
            <li><Link to="/admin/profile">Add Request Money</Link></li>
            <li><Link to="/admin/profile">All Games</Link></li>
            <li><Link to="/admin/profile">All Withdrawal Request</Link></li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="users" element={<UserList />} />
            <Route path="category" element={<Category />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
