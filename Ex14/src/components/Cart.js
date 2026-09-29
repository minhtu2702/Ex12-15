import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalCount, totalValue } = useCart();

  return (
    <div style={{ flex: '1', backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
      <h3 style={{ marginTop: 0 }}>Your Cart</h3>
      <p>Total Items: <strong>{totalCount}</strong></p>
      <p>Total Price: <strong>${totalValue}</strong></p>

      {cartItems.length === 0 ? (
        <p style={{ color: '#888' }}>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
                padding: '8px 0'
              }}
            >
              <div>
                <strong>{item.name}</strong> x {item.quantity}
                <div><small>${(item.price * item.quantity).toFixed(2)}</small></div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#e63946',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            style={{
              width: '100%',
              backgroundColor: '#e63946',
              color: 'white',
              border: 'none',
              padding: '8px',
              borderRadius: '4px',
              marginTop: '15px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;