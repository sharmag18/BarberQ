import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!phone.trim()) {
      setError('Please enter your phone number');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      if (!response.ok) {
        throw new Error('Login failed. Please check your phone number or sign up.');
      }
      setSuccess('Signed in successfully!');
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
      padding: '2rem',
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
        border: '1px solid var(--border)',
      }}>
        <h1 style={{
          color: 'var(--text)',
          fontSize: '2.2rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          marginTop: 0,
        }}>
          Welcome Back
        </h1>
        <div style={{
          color: 'var(--text)',
          opacity: 0.8,
          fontSize: '1.1rem',
          marginBottom: '2.2rem',
        }}>
          Sign in as Customer
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.3rem', textAlign: 'left' }}>
            <label style={{
              display: 'block',
              color: 'var(--text)',
              fontSize: '1rem',
              fontWeight: 500,
              marginBottom: '0.5rem',
            }}>
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Enter your phone number (e.g., 9876543210)"
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
            Sign In
          </button>
        </form>
        {/* Info block */}
        <div style={{
          background: '#eef5ff',
          borderRadius: '12px',
          padding: '1.1rem',
          marginBottom: '1.5rem',
          border: '1px solid #b6d6ff',
          textAlign: 'left',
        }}>
          <span style={{ fontWeight: 700, color: '#2176ff' }}>New to NextCut? </span>
          <span style={{ color: '#2176ff', fontSize: '1.01rem' }}>
            Just enter your phone number above - no password needed!
          </span>
        </div>
        {/* Sign up link */}
        <div style={{
          color: 'var(--text)',
          opacity: 0.7,
          fontSize: '1.05rem',
          marginTop: '1.2rem',
        }}>
          Don't have an account?{' '}
          <Link
            to="/register"
            style={{
              color: '#339CFF',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login; 