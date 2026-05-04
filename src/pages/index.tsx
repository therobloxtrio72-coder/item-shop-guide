import React from 'react';

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'Arial' }}>
      
      <h1>🦈 The Drunk Sharks Shop</h1>
      <p>Welcome to the official shop guide system.</p>

      {/* RED RING WARNING */}
      <div
        style={{
          marginTop: 50,
          padding: 30,
          borderRadius: 999,
          border: '6px solid red',
          backgroundColor: '#2b0000',
          color: 'white',
          textAlign: 'center',
          maxWidth: 500,
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 0 25px red',
        }}
      >
        <div style={{ fontSize: 50 }}>🚨</div>

        <h2 style={{ color: 'red', marginBottom: 10 }}>
          IMPORTANT NOTICE
        </h2>

        <p style={{ fontWeight: 'bold' }}>
          If any information on this site is incorrect or outdated,
          please contact <span style={{ color: 'red' }}>We1rd</span>
        </p>
      </div>

    </main>
  );
}