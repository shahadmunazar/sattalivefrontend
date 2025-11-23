// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Add your styles here
import Home from './Components/Home';

// const Home = () => <div>Home Content</div>;
const Users = () => <div>Users Content</div>;
const Settings = () => <div>Settings Content</div>;
const Reports = () => <div>Reports Content</div>;
const Profile = () => <div>Profile Content</div>;

const Routes = () => {
  return (
    <Router>
      <div className="admin-panel">
        <header className="header">
          <h1>Admin Panel</h1>
        </header>
        <div className="container">
          <nav className="sidebar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/reports">Reports</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
