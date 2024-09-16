import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Simulate a successful response
      setNotification('Password reset link sent to your email!');
      setError(false);
    } else {
      setNotification('Please enter a valid email address.');
      setError(true);
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="font-bold">Password Reset</h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded p-8 w-full max-w-md"
          aria-labelledby="password-reset-form"
        >
          <label htmlFor="email" className="block mb-2">
            Email:
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 border rounded w-full p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}
              required
              aria-invalid={error}
              aria-describedby="email-error"
            />
            {error && <span id="email-error" className="text-red-500">{notification}</span>}
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Reset Password
          </button>
        </form>
      </main>
      {notification && (
        <div className={`p-4 text-center ${error ? 'text-red-500' : 'text-green-500'}`}>
          {notification}
        </div>
      )}
    </div>
  );
};

export default PasswordReset;