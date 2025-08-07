import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your phone number');
      return;
    }
    try {
      // Try to register (or login if already exists)
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone })
      });
      if (!response.ok) {
        throw new Error('Failed to create account');
      }
      setSuccess('Account created successfully!');
      localStorage.setItem('customerName', name);
      localStorage.setItem('customerPhone', phone);
      setTimeout(() => navigate('/join-queue'), 1000);
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
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Back to role selection link */}
      <Link
        to="/select-role"
        style={{
          color: '#339CFF',
          textDecoration: 'none',
          alignSelf: 'flex-start',
          marginBottom: '2rem',
          fontWeight: 500,
          fontSize: '1.1rem',
          marginLeft: 'calc(50vw - 200px)',
        }}
      >
        &lt; Back to role selection
      </Link>
      <div style={{
        background: 'var(--card)',
        borderRadius: '16px',
        padding: '2.5rem 2rem 2rem 2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        width: '100%',
        maxWidth: '420px',
        textAlign: 'center',
        border: '1px solid var(--border)'
      }}>
        <h1 style={{
          color: 'var(--text)',
          fontSize: '2.2rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          marginTop: 0
        }}>
          Create Account
        </h1>
        <div style={{
          color: 'var(--text)',
          opacity: 0.8,
          fontSize: '1.1rem',
          marginBottom: '2.2rem',
        }}>
          Sign up as Customer
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.3rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              color: 'var(--text)',
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '0.5rem'
            }}>
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your full name"
              style={{
                width: '100%',
                padding: '0.85rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '1rem',
                background: 'var(--card)',
                color: 'var(--text)',
                marginBottom: 0,
                boxSizing: 'border-box',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '1.3rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              color: 'var(--text)',
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '0.5rem'
            }}>
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Enter 10-digit phone number (e.g., 9876543210)"
              style={{
                width: '100%',
                padding: '0.85rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '1rem',
                background: 'var(--card)',
                color: 'var(--text)',
                marginBottom: 0,
                boxSizing: 'border-box',
              }}
              required
            />
            <div style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.95rem', marginTop: 4 }}>
              No password needed! We'll send you a verification code later.
            </div>
          </div>
          {error && (
            <div style={{
              color: 'var(--error)',
              background: 'rgba(255,0,0,0.08)',
              borderRadius: 6,
              marginBottom: '1rem',
              fontSize: '0.98rem',
              padding: '0.5rem 0.75rem',
              textAlign: 'center',
            }}>{error}</div>
          )}
          {success && (
            <div style={{
              color: 'var(--success)',
              background: 'rgba(0,255,0,0.08)',
              borderRadius: 6,
              marginBottom: '1rem',
              fontSize: '0.98rem',
              padding: '0.5rem 0.75rem',
              textAlign: 'center',
            }}>{success}</div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#339CFF',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '1rem',
              fontSize: '1.15rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: '1.5rem',
              boxShadow: '0 0 16px 2px #339cff55',
              transition: 'background 0.2s',
            }}
          >
            Create Account
          </button>
        </form>
        {/* Info block */}
        <div style={{
          background: 'rgba(0,255,100,0.13)',
          borderRadius: '8px',
          padding: '1.1rem',
          marginBottom: '1.5rem',
          border: '1px solid #b6f5c7',
          textAlign: 'left',
        }}>
          <span style={{ fontWeight: 700, color: '#1a7f37' }}>Simple &amp; Fast! </span>
          <span style={{ color: 'var(--text)', fontSize: '1.01rem' }}>
            No passwords or email verification needed. Just your name and phone number to get started.
          </span>
        </div>
        {/* Sign in link */}
        <div style={{
          color: 'var(--text)',
          opacity: 0.7,
          fontSize: '1.05rem',
          marginTop: '1.2rem',
        }}>
          Already have an account?{' '}
          <Link
            to="/login"
            style={{
              color: '#339CFF',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerAuth; 