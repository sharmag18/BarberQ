import React from 'react';
import { useNavigate } from 'react-router-dom';

function BarberOptions() {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ maxWidth: 400, margin: '4rem auto', textAlign: 'center' }}>
      <h2>Barber Portal</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        <button className="button" onClick={() => navigate('/barber/login')}>Login as Barber</button>
        <button className="button" onClick={() => navigate('/barber/register')}>Register as Barber</button>
      </div>
    </div>
  );
}

export default BarberOptions; 