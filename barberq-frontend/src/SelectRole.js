import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectRole() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 400, margin: '4rem auto', background: '#fff', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px #eee', textAlign: 'center' }}>
      <h2>Welcome!</h2>
      <p>Are you a customer or a barber?</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        <button style={{ padding: '1rem', fontSize: 18, borderRadius: 6, background: '#2d2d2d', color: '#fff', border: 'none' }} onClick={() => navigate('/customer')}>I'm a Customer</button>
        <button style={{ padding: '1rem', fontSize: 18, borderRadius: 6, background: '#2d2d2d', color: '#fff', border: 'none' }} onClick={() => navigate('/barber')}>I'm a Barber</button>
      </div>
    </div>
  );
}

export default SelectRole; 