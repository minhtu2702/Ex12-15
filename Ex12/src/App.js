import React from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragAndDropList from './components/DragAndDropList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Exercise 12: React Hook (useState)</h1>

      <section className="exercise-section">
        <h2>1. Counter</h2>
        <Counter />
      </section>

      <section className="exercise-section">
        <h2>2. Controlled Input Field</h2>
        <ControlledInput />
      </section>

      <section className="exercise-section">
        <h2>3. Toggle Visibility</h2>
        <ToggleVisibility />
      </section>

      <section className="exercise-section">
        <h2>4. Todo List</h2>
        <TodoList />
      </section>

      <section className="exercise-section">
        <h2>5. Color Switcher</h2>
        <ColorSwitcher />
      </section>

      <section className="exercise-section">
        <h2>6. Search Filter</h2>
        <SearchFilter />
      </section>

      <section className="exercise-section">
        <h2>7. Drag and Drop List</h2>
        <DragAndDropList />
      </section>
    </div>
  );
}

export default App;