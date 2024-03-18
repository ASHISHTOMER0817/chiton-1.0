'use client'
import React, { useState } from 'react';
import axios from 'axios';

const NewPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('/api/users/resetPassword', {
        email: email,
        newPassword: password
      });
      setSuccessMessage( await response.data.message);
      setError( await response.data.success);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      {successMessage && (
        <p className="text-green-600 mb-4">{successMessage}</p>
      )}
      <form className="flex flex-col items-center w-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
          className=" px-4 py-2 mb-4 border w-[350px] text-black border-none border-b-2 border-black focus:outline-none focus:border-gray-500"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={handleChangePassword}
          className=" px-4 py-2 mb-4 border w-[350px] text-black border-none border-b-2 border-black focus:outline-none focus:border-gray-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          className=" px-4 py-2 mb-4 border w-[350px] text-black border-none border-b-2 border-black focus:outline-none focus:border-gray-500"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900 focus:outline-none"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
