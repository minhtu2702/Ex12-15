import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialValue = 10 }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [timeRemaining]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Time Remaining: {timeRemaining}</h2>
      {timeRemaining === 0 && <p style={{ color: '#e63946' }}>Time's up!</p>}
    </div>
  );
}

export default CountdownTimer;