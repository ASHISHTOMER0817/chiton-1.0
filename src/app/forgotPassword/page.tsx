'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/forgotPassword', { email });
      
      console.log('Response:', await response.data);

      // Check if the email doesn't exist based on the response from the backend
      if ( await response.data.success === false) {
        setError('Email address not found. Please check and try again.');
      } else {
        // Reset error if email exists
        setError('');
        // Proceed with further actions (e.g., show success message, redirect, etc.)
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      <p className="text-center text-gray-600 mb-4">
        Enter your email address below to receive a password reset link.
      </p>
      <form className="flex flex-col items-center w-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          className="w-[350px] border px-4 py-2 mb-4 text-black border-none border-b-2 border-black focus:outline-none focus:border-gray-500"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900 focus:outline-none"
        >
          Send Reset Link
        </button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
