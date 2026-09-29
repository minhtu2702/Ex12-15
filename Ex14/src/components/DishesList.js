import React from 'react';
import { useCart } from '../context/CartContext';
import { dishes } from '../data/data'; 

function DishesList() {
  const { addToCart } = useCart();

  return (
    <div style={{ flex: '2', padding: '10px' }}>
      <h3>Menu Dishes</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              backgroundColor: '#3a3f4d',
              padding: '15px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#61dafb' }}>
                {dish.name}{' '}
                {dish.label && (
                  <span style={{ fontSize: '12px', color: '#e63946' }}>
                    ({dish.label})
                  </span>
                )}
              </h4>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#ccc' }}>
                {dish.description}
              </p>
              <strong style={{ color: '#2ec4b6' }}>${dish.price}</strong>
            </div>
            <button
              onClick={() => addToCart(dish)}
              style={{
                backgroundColor: '#2ec4b6',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                marginLeft: '10px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishesList;