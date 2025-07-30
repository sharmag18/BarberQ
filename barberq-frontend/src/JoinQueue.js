import React, { useState, useEffect } from 'react';

const services = ['Haircut', 'Shave', 'Beard Trim', 'Hair Color'];

function JoinQueue() {
  const [barbers, setBarbers] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [joined, setJoined] = useState(null);
  const [error, setError] = useState('');

  const name = localStorage.getItem('customerName') || '';
  const phone = localStorage.getItem('customerPhone') || '';

  useEffect(() => {
    fetch('http://localhost:8080/api/barbers')
      .then(res => res.json())
      .then(data => setBarbers(data))
      .catch(() => setError('Failed to load barbers'));
  }, []);

  const handleJoin = async (e) => {
    e.preventDefault();
    setError('');
    if (!selectedBarber) {
      setError('Please select a barber');
      return;
    }
    if (!name || !phone) {
      setError('Missing customer name or phone. Please log in again.');
      return;
    }
    if (!selectedServices.length) {
      setError('Please select at least one service.');
      return;
    }
    try {
      const res = await fetch('http://localhost:8080/api/queue/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          barberId: selectedBarber,
          customerName: name,
          customerPhone: phone,
          service: selectedServices.join(', '),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setJoined(barbers.find(b => b.id === selectedBarber || b._id === selectedBarber));
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  if (joined) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center' }}>
        <h3>You've joined the queue for:</h3>
        <div style={{ fontWeight: 'bold', fontSize: 20, margin: '1rem 0' }}>{joined.shopName || joined.name}</div>
        <div style={{ color: '#666' }}>{joined.phone}</div>
        <div style={{ marginTop: 24, color: 'var(--success)', fontWeight: 'bold' }}>You are in the queue!</div>
      </div>
    );
  }

  return (
    <div className="card fade-in" style={{ textAlign: 'center' }}>
      <h2>Join a Queue</h2>
      <form onSubmit={handleJoin}>
        <div style={{ marginBottom: 16 }}>
          <label>Barber/Salon:</label>
          <select value={selectedBarber} onChange={e => setSelectedBarber(e.target.value)} style={{ width: '100%', padding: 8, marginTop: 4 }}>
            <option value="">Select a barber</option>
            {barbers.map(b => (
              <option key={b.id || b._id} value={b.id || b._id}>
                {b.shopName || b.name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: 16, textAlign: 'left' }}>
          <label>Service:</label>
          <ul style={{ listStyle: 'disc', paddingLeft: 24, marginTop: 8 }}>
            {services.map(service => (
              <li
                key={service}
                className={`service-bullet${selectedServices.includes(service) ? ' selected' : ''}`}
                onClick={() => toggleService(service)}
              >
                {service} {selectedServices.includes(service) && <span style={{ color: 'var(--success)' }}>✔</span>}
              </li>
            ))}
          </ul>
        </div>
        {error && <div className="fade-in" style={{ color: 'var(--error)', marginBottom: 16 }}>{error}</div>}
        <button type="submit" className="button">Join Queue</button>
      </form>
    </div>
  );
}

export default JoinQueue; 