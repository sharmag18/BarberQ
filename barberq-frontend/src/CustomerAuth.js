import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomerAuth() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone })
      });
      if (!response.ok) {
        let errorMsg = 'Registration failed';
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          errorMsg = data.message || errorMsg;
        } else {
          const text = await response.text();
          if (text) errorMsg = text;
        }
        throw new Error(errorMsg);
      }
      setSuccess('Signed in!');
      setName('');
      setPhone('');
      setTimeout(() => navigate('/join-queue'), 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '4rem auto', background: '#fff', padding: '2rem', borderRadius: 8, boxShadow: '0 2px 8px #eee', textAlign: 'center' }}>
      <h2>Customer Sign In / Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Phone Number</label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        {success && <div style={{ color: 'green', marginBottom: '1rem' }}>{success}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#2d2d2d', color: '#fff', border: 'none', borderRadius: 4 }}>Sign In / Register</button>
      </form>
    </div>
  );
}

export default CustomerAuth; 