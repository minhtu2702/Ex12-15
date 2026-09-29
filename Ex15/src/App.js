import React from 'react';
import CounterReducer from './components/CounterReducer';
import QuestionBank from './components/QuestionBank';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Exercise 15: React Hook (useReducer)</h1>

      <section className="exercise-section">
        <h2>1. Counter (useReducer)</h2>
        <CounterReducer />
      </section>

      <section className="exercise-section">
        <h2>2. Question Bank</h2>
        <QuestionBank />
      </section>
    </div>
  );
}

export default App;