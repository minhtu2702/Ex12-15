import React, { useState } from 'react';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';
import './App.css';

function App() {
  const [selectedUserId, setSelectedUserId] = useState(1);

  const validateMinLength = (val) => val.trim().length >= 5;

  return (
    <div className="app-container">
      <h1>Exercise 13: React Hook (useEffect)</h1>
      <section className="exercise-section">
        <h2>1. Data Fetching (User Posts)</h2>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Select User ID: </label>
          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(Number(e.target.value))}
            style={{ padding: '6px', fontSize: '16px' }}
          >
            <option value={1}>User 1</option>
            <option value={2}>User 2</option>
            <option value={3}>User 3</option>
          </select>
        </div>
        <UserPosts userId={selectedUserId} />
      </section>

      <section className="exercise-section">
        <h2>2. Countdown Timer</h2>
        <CountdownTimer initialValue={10} />
      </section>

      <section className="exercise-section">
        <h2>3. Window Resize Listener</h2>
        <WindowSize />
      </section>

      <section className="exercise-section">
        <h2>4. Form Input Validation</h2>
        <ValidatedInput
          validationFunction={validateMinLength}
          errorMessage="Nội dung nhập vào phải chứa ít nhất 5 ký tự!"
        />
      </section>
    </div>
  );
}

export default App;