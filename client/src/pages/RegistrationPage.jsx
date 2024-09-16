import React, { useState } from 'react';

// Header Component
const Header = () => (
  <header className="bg-blue-600 p-4 fixed w-full z-10">
    <nav className="flex justify-between">
      <a href="/" className="text-white font-bold">MySite</a>
      <div>
        <a href="/about" className="text-white px-4">About</a>
        <a href="/contact" className="text-white px-4">Contact</a>
      </div>
    </nav>
  </header>
);

// RegistrationForm Component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear previous errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage('Registration successful! Please check your email for confirmation.');
      // Reset form
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <form className="mt-16 p-4 bg-white rounded shadow-md" onSubmit={handleSubmit} aria-labelledby="registration-form">
      <h2 id="registration-form" className="text-xl mb-4">Register</h2>
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`border rounded p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && <p id="name-error" className="text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`border rounded p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && <p id="email-error" className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`border rounded p-2 w-full ${errors.password ? 'border-red-500' : ''}`}
          aria-invalid={errors.password ? "true" : "false"}
          aria-describedby="password-error"
        />
        {errors.password && <p id="password-error" className="text-red-500">{errors.password}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-4 w-full">Register</button>
      {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
    </form>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-200 p-4 mt-10">
    <p className="text-center">© 2023 MySite. All rights reserved.</p>
    <p className="text-center">
      <a href="/privacy" className="text-blue-600">Privacy Policy</a> | 
      <a href="/terms" className="text-blue-600">Terms of Service</a>
    </p>
  </footer>
);

// RegistrationPage Component
const RegistrationPage = () => (
  <div className="min-h-screen bg-gray-100 pt-16">
    <Header />
    <main className="flex justify-center items-center flex-col p-4">
      <RegistrationForm />
    </main>
    <Footer />
  </div>
);

export default RegistrationPage;