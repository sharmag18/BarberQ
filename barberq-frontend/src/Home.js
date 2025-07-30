import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px #eee', textAlign: 'center' }}>
      <h1>Welcome to BarberQ</h1>
      <p>Your smart queue management system for salons and barbershops.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/login" style={{ marginRight: 16, padding: '10px 24px', background: '#2d2d2d', color: '#fff', borderRadius: 4, textDecoration: 'none' }}>Login</Link>
        <Link to="/register" style={{ padding: '10px 24px', background: '#2d2d2d', color: '#fff', borderRadius: 4, textDecoration: 'none' }}>Register</Link>
      </div>
    </div>
  );
}

export default Home; 