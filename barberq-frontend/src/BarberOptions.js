import React from 'react';
import { useNavigate } from 'react-router-dom';

function BarberOptions() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 400, margin: '4rem auto', background: '#fff', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px #eee', textAlign: 'center' }}>
      <h2>Barber Portal</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        <button style={{ padding: '1rem', fontSize: 18, borderRadius: 6, background: '#2d2d2d', color: '#fff', border: 'none' }} onClick={() => navigate('/barber/login')}>Login as Barber</button>
        <button style={{ padding: '1rem', fontSize: 18, borderRadius: 6, background: '#2d2d2d', color: '#fff', border: 'none' }} onClick={() => navigate('/barber/register')}>Register as Barber</button>
      </div>
    </div>
  );
}

export default BarberOptions; 