import React, { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ padding: '8px', fontSize: '18px', width: '180px', marginBottom: '10px' }}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          width: '180px',
          height: '180px',
          backgroundColor: color || 'transparent',
          border: color ? 'none' : '1px dashed #ccc'
        }}
      />
    </div>
  );
}

export default ColorSwitcher;