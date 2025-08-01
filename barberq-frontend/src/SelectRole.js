import React from 'react';
import { useNavigate } from 'react-router-dom';

function SelectRole() {
  const navigate = useNavigate();
  return (
    <div style={{ 
      maxWidth: 1000, 
      margin: '0 auto', 
      padding: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      justifyContent: 'flex-start',
      paddingTop: '0rem'
    }}>
      {/* BarberQ Title */}
      <h1 style={{
        color: 'var(--text)',
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '0rem',
        textAlign: 'center',
        marginTop: '0'
      }}>
        BarberQ
      </h1>

      {/* Introductory Text */}
      <p style={{
        color: 'var(--text)',
        opacity: 0.9,
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '3rem',
        lineHeight: '1.4',
        maxWidth: '600px'
      }}>
        Welcome to your smart Salon Queue Manager.<br />
        Book, wait, and get styled without the hassle.
      </p>

      {/* Cards Container */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: '700px',
        marginBottom: '2rem'
      }}>
        {/* Customer Card */}
        <div 
          className="role-card customer-card"
          onClick={() => navigate('/customer')}
          style={{
            flex: 1,
            background: 'var(--card)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px solid var(--border)',
            transition: 'all 0.3s ease',
            minHeight: '320px',
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        >
          {/* Customer Icon */}
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'var(--primary)',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'var(--primary-text)'
          }}>
            👤
          </div>

          <h2 style={{ 
            color: 'var(--text)', 
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            I'm a Customer
          </h2>

          <p style={{ 
            color: 'var(--text)', 
            opacity: 0.7,
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            Find nearby barbers and join their queue remotely
          </p>

          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontSize: '0.9rem' }}>✓</span>
              <span style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.85rem' }}>Find barbers near you</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontSize: '0.9rem' }}>✓</span>
              <span style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.85rem' }}>Join queue remotely</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontSize: '0.9rem' }}>✓</span>
              <span style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.85rem' }}>Track your position</span>
            </div>
          </div>
        </div>

        {/* Barber Card */}
        <div 
          className="role-card barber-card"
          onClick={() => navigate('/barber')}
          style={{
            flex: 1,
            background: 'var(--card)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px solid var(--border)',
            transition: 'all 0.3s ease',
            minHeight: '320px',
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        >
          {/* Barber Icon */}
          <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'var(--primary)',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            color: 'var(--primary-text)'
          }}>
            ✂️
          </div>

          <h2 style={{ 
            color: 'var(--text)', 
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>
            I'm a Barber
          </h2>

          <p style={{ 
            color: 'var(--text)', 
            opacity: 0.7,
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            Sign in to manage your digital queue
          </p>

          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontSize: '0.9rem' }}>✓</span>
              <span style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.85rem' }}>Manage your queue</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontSize: '0.9rem' }}>✓</span>
              <span style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.85rem' }}>Serve customers efficiently</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--success)', marginRight: '0.5rem', fontSize: '0.9rem' }}>✓</span>
              <span style={{ color: 'var(--text)', opacity: 0.7, fontSize: '0.85rem' }}>Real-time updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Registration Block */}
      <div style={{
        background: 'var(--card)',
        borderRadius: '12px',
        padding: '1rem 2rem',
        textAlign: 'center',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem'
      }}>
        <span style={{ color: '#ff9500', fontSize: '1.2rem' }}>🔒</span>
        <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>New Barber Shop? Registration Required</span>
      </div>
    </div>
  );
}

export default SelectRole; 