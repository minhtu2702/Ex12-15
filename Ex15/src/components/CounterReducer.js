import React, { useReducer } from 'react';

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ fontSize: '32px' }}>Count: {state.count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          style={{ padding: '8px 16px', fontSize: '18px', cursor: 'pointer' }}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          style={{ padding: '8px 16px', fontSize: '18px', cursor: 'pointer' }}
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          style={{ padding: '8px 16px', fontSize: '18px', cursor: 'pointer' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;