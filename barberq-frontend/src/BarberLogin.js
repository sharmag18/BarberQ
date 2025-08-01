import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function BarberLogin() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!phone.trim() || !password.trim()) {
      setError('Please enter both phone number and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/barber-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password })
      });
      
      if (!response.ok) {
        throw new Error('Invalid phone number or password');
      }
      
      const data = await response.json();
      setSuccess('Signed in successfully!');
      localStorage.setItem('barberToken', data.token);
      localStorage.setItem('barberId', data.userId);
      setTimeout(() => navigate('/barber/dashboard'), 1000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      {/* Back to role selection link */}
      <Link 
        to="/select-role" 
        style={{
          color: 'var(--primary)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '2rem',
          fontSize: '1rem'
        }}
      >
        ← Back to role selection
      </Link>

      {/* Main login card */}
      <div style={{
        background: 'var(--card)',
        borderRadius: '12px',
        padding: '2.5rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center',
        border: '1px solid var(--border)'
      }}>
        {/* Header */}
        <h1 style={{
          color: 'var(--text)',
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          marginTop: '0'
        }}>
          Welcome Back
        </h1>
        <p style={{
          color: 'var(--text)',
          opacity: 0.7,
          fontSize: '1rem',
          marginBottom: '2rem',
          marginTop: '0'
        }}>
          Sign in as Barber
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              color: 'var(--text)',
              fontSize: '0.9rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}>
              Phone Number
            </label>
            <input 
              type="tel" 
              value={phone} 
              onChange={e => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                background: 'var(--card)',
                color: 'var(--text)'
              }}
              required 
            />
          </div>

          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              color: 'var(--text)',
              fontSize: '0.9rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}>
              Password
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '1rem',
                boxSizing: 'border-box',
                background: 'var(--card)',
                color: 'var(--text)'
              }}
              required 
            />
          </div>

          {error && (
            <div style={{ 
              color: 'var(--error)', 
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}>
              {error}
            </div>
          )}

          {success && (
            <div style={{ 
              color: 'var(--success)', 
              marginBottom: '1rem',
              fontSize: '0.9rem'
            }}>
              {success}
            </div>
          )}

          <button 
            type="submit" 
            style={{
              width: '100%',
              background: 'var(--primary)',
              color: 'var(--primary-text)',
              border: 'none',
              borderRadius: '6px',
              padding: '0.75rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '1.5rem'
            }}
          >
            Sign In
          </button>
        </form>

        {/* Information block */}
        <div style={{
          background: 'var(--bg)',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '1.5rem',
          border: '1px solid var(--border)'
        }}>
          <p style={{
            color: 'var(--primary)',
            fontSize: '0.9rem',
            margin: '0',
            lineHeight: '1.4'
          }}>
            New to BarberQ? Register your barber shop to get started!
          </p>
        </div>

        {/* Registration link */}
        <p style={{
          color: 'var(--text)',
          opacity: 0.7,
          fontSize: '0.9rem',
          margin: '0'
        }}>
          Don't have an account?{' '}
          <Link 
            to="/barber/register" 
            style={{
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BarberLogin; 