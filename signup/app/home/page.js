'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Perform any logout logic here, e.g., clearing authentication tokens, etc.
    // For this example, we'll directly navigate to the signup page after logout.

    // Navigate to the signup page
    router.push('/register');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#222222', color: '#ffffff' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Welcome to Impact Board</h2>
        <button
          type="button"
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ff5252',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;