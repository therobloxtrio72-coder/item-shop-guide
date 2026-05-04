import React from 'react';

export default function Home() {
  const items = [
    { name: 'Getting Started', link: '/docs/getting-started' },
    { name: 'Shop Guide', link: '/docs/shop-guide' },
    { name: 'Orders', link: '/docs/orders' },
    { name: 'Payments', link: '/docs/payments' },
    { name: 'Forums', link: '/docs/forums' },
    { name: 'Support Chat', link: '/docs/support-chat' },
  ];

  return (
    <main
      style={{
        padding: 40,
        fontFamily: 'Arial',
        background: '#0f0f0f',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: 42 }}>🦈 Drunk Sharks Support</h1>
        <p style={{ opacity: 0.7 }}>How can we help you today?</p>
      </div>

      {/* SEARCH BAR (visual only) */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <input
          placeholder="Search guides, items, orders..."
          style={{
            width: '60%',
            padding: 14,
            borderRadius: 10,
            border: '1px solid #333',
            outline: 'none',
            background: '#1c1c1c',
            color: 'white',
          }}
        />
      </div>

      {/* CARD GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        {items.map((item) => (
          <a
            key={item.name}
            href={item.link}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div
              style={{
                padding: 20,
                background: '#1c1c1c',
                borderRadius: 12,
                border: '1px solid #333',
                cursor: 'pointer',
                transition: '0.2s',
              }}
            >
              <h3>{item.name}</h3>
              <p style={{ opacity: 0.6, fontSize: 14 }}>
                Open section
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* WARNING RING */}
      <div
        style={{
          marginTop: 60,
          padding: 25,
          borderRadius: 12,
          border: '2px solid red',
          textAlign: 'center',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={{ fontSize: 40 }}>🚨</div>
        <strong style={{ color: 'red' }}>
          If information is incorrect or outdated, contact We1rd
        </strong>
      </div>
    </main>
  );
}