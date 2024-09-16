import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  const handleRegister = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!validateEmail(email) || password.length < 6) {
      setMessage('Invalid input. Please check your email and password.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setMessage('Registration successful!');
        setIsError(false);
      } else {
        setMessage('Registration failed. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setIsError(true);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <form 
      onSubmit={handleRegister} 
      style={{ padding: '16px', margin: '16px', maxWidth: '400px', display: 'flex', flexDirection: 'column' }} 
      aria-live="polite"
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: window.innerWidth < 768 ? '12px' : '16px',
          margin: '8px 0',
          border: '1px solid lightgray',
          borderRadius: '4px',
          width: window.innerWidth < 768 ? '100%' : 'auto'
        }}
        required
      />
      <div style={{ color: 'lightcoral' }}>
        {email && !validateEmail(email) && 'Please enter a valid email address.'}
      </div>

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: window.innerWidth < 768 ? '12px' : '16px',
          margin: '8px 0',
          border: '1px solid lightgray',
          borderRadius: '4px',
          width: window.innerWidth < 768 ? '100%' : 'auto'
        }}
        required
      />
      <div style={{ color: 'lightcoral' }}>
        {password.length < 6 && password && 'Password must be at least 6 characters long.'}
      </div>
      
      <button
        type="submit"
        disabled={!validateEmail(email) || password.length < 6}
        style={{
          marginTop: '16px',
          padding: window.innerWidth < 768 ? '12px' : '16px',
          backgroundColor: 'blue', // Replace with primary theme color
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}
      >
        Submit
      </button>

      <div 
        aria-live="polite" 
        role={isError ? 'alert' : 'status'}
        style={{ marginTop: '16px', color: isError ? 'red' : 'green' }}
      >
        {message}
      </div>
    </form>
  );
};

export default RegistrationForm;