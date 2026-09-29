import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Theme() {
  const { themeStyle, toggleTheme } = useTheme();

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: themeStyle.background,
          color: themeStyle.foreground,
          border: '2px solid #333',
          padding: '10px 20px',
          fontSize: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '2px 2px 5px rgba(0,0,0,0.3)'
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;