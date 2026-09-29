import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', width: '250px' }}
      />
      <h2 style={{ fontSize: '28px', marginTop: '20px' }}>Input text: {text}</h2>
    </div>
  );
}

export default ControlledInput;