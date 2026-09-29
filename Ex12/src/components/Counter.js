import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={() => setCount(count + 1)} style={{ padding: '8px 16px', fontSize: '16px' }}>
        Increment
      </button>
      <h2 style={{ fontSize: '32px', marginTop: '20px' }}>Count: {count}</h2>
    </div>
  );
}

export default Counter;