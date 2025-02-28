import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Add logic for handling login (e.g., API call, authentication)
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-64 p-4 border rounded border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};