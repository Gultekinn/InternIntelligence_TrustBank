'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

// LoginPage.tsx
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, password);
    router.push('/dashboard'); // Login sonrası dashboard'a yönlendir
  } catch (err: any) {
    console.error("Login error:", err); // Hata mesajını logla
    setError(`Error: ${err.message || 'An unknown error occurred'}`); // Hata mesajını daha detaylı ver
  }
};

  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-sm mt-4 text-center">
          Don't have an account?{' '}
          <a href="/auth/register" className="text-blue-500 underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
