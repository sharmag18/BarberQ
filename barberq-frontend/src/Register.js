import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
      setSuccess('Registration successful! You can now log in.');
      setName('');
      setPhone('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="card" style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Phone Number</label>
          <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required />
        </div>
        {error && <div style={{ color: 'var(--error)', marginBottom: '1rem' }}>{error}</div>}
        {success && <div style={{ color: 'var(--success)', marginBottom: '1rem' }}>{success}</div>}
        <button type="submit" className="button" style={{ width: '100%' }}>Register</button>
      </form>
    </div>
  );
}

export default Register; 