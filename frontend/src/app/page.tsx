'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>('Loading...');

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/health')
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus('Backend nicht erreichbar'));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>CTE-Dashboard</h1>
      <p>Full-Stack Template mit Next.js + NestJS</p>
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <strong>API Status:</strong> {apiStatus}
      </div>
    </main>
  );
}
