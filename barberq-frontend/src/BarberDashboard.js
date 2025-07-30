import React, { useEffect, useState } from 'react';

// For demo, set the barberId here or get it from login context/token
const BARBER_ID = 'PUT_THE_LOGGED_IN_BARBER_ID_HERE';

function BarberDashboard() {
  const [queue, setQueue] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8080/api/queue/${BARBER_ID}`)
      .then(res => res.json())
      .then(data => setQueue(data))
      .catch(() => setError('Failed to load queue'));
  }, []);

  return (
    <div className="card fade-in" style={{ textAlign: 'center' }}>
      <h2>Barber Queue Dashboard</h2>
      {error && <div className="fade-in" style={{ color: 'var(--error)', marginBottom: 16 }}>{error}</div>}
      <p>Here are the customers currently in your queue:</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24 }}>
        <thead>
          <tr style={{ background: 'var(--bg)' }}>
            <th style={{ padding: 8, border: '1px solid var(--border)' }}>Name</th>
            <th style={{ padding: 8, border: '1px solid var(--border)' }}>Phone</th>
            <th style={{ padding: 8, border: '1px solid var(--border)' }}>Service</th>
            <th style={{ padding: 8, border: '1px solid var(--border)' }}>Joined At</th>
          </tr>
        </thead>
        <tbody>
          {queue.map((customer, idx) => (
            <tr key={customer.id || customer._id} className="fade-in" style={{ animationDelay: `${idx * 0.08}s` }}>
              <td style={{ padding: 8, border: '1px solid var(--border)' }}>{customer.customerName}</td>
              <td style={{ padding: 8, border: '1px solid var(--border)' }}>{customer.customerPhone}</td>
              <td style={{ padding: 8, border: '1px solid var(--border)' }}>{customer.service}</td>
              <td style={{ padding: 8, border: '1px solid var(--border)' }}>{customer.joinedAt ? new Date(customer.joinedAt).toLocaleString() : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BarberDashboard; 