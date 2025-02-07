'use client';
import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';

export default function Settings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(auth.currentUser?.email || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Profile updated successfully!</p>}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          disabled
        />
        <button className="bg-blue-500 text-white p-2 rounded w-full">
          Update
        </button>
      </form>
    </div>
  );
}
