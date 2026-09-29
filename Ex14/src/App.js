import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Theme from './components/Theme';
import DishesList from './components/DishesList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="app-container">
          <h1>Exercise 14: React Hook (useContext)</h1>
          <section className="exercise-section">
            <h2>1. Toggle Theme</h2>
            <Theme />
          </section>
          <section className="exercise-section">
            <h2>2 & 3. Cart Application (Real-time updates)</h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <DishesList />
              <Cart />
            </div>
          </section>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;