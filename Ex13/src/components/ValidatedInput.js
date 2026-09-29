import React, { useState, useEffect } from 'react';

function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          border: isValid ? '2px solid #ccc' : '2px solid #e63946',
          borderRadius: '4px',
          outline: 'none',
          width: '250px'
        }}
      />
      {!isValid && (
        <p style={{ color: '#e63946', marginTop: '8px', fontSize: '14px' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default ValidatedInput;