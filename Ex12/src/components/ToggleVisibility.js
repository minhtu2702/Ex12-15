import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{ padding: '8px 20px', fontSize: '18px' }}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>

      {isVisible && <h2 style={{ fontSize: '32px', marginTop: '20px' }}>Toggle me!</h2>}
    </div>
  );
}

export default ToggleVisibility;