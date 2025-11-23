
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './contexts/AuthContext';
// import Home from './Components/Home';
// import Dashboard from './Components/Dashboard';
// import AdminLogin from './Components/AdminLogin';
// import './App.css'; // Add your styles here

// const ProtectedRoute = ({ element }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? element : <Navigate to="/adminlogin" />;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/adminlogin" element={<AdminLogin />} />
//           <Route path="/admin/*" element={<ProtectedRoute element={<Dashboard />} />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import Home from './Components/Home';
import AdminDashboard from './Components/Dashboard'; // Example protected route
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css'; // Add your styles here

const ProtectedRoute = ({ element: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <AdminLogin />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={<ProtectedRoute element={AdminDashboard} />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
