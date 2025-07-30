import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Home from './Home';
import SelectRole from './SelectRole';
import CustomerAuth from './CustomerAuth';
import BarberOptions from './BarberOptions';
import BarberLogin from './BarberLogin';
import BarberRegister from './BarberRegister';
import JoinQueue from './JoinQueue';
import BarberDashboard from './BarberDashboard';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <header style={{ background: 'var(--primary)', padding: '1rem 0', marginBottom: '2rem' }}>
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="/" style={{ color: 'var(--primary-text)', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          </nav>
        </header>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/select-role" />} />
            <Route path="/select-role" element={<SelectRole />} />
            <Route path="/customer" element={<CustomerAuth />} />
            <Route path="/barber" element={<BarberOptions />} />
            <Route path="/barber/login" element={<BarberLogin />} />
            <Route path="/barber/register" element={<BarberRegister />} />
            <Route path="/barber/dashboard" element={<BarberDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/join-queue" element={<JoinQueue />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
