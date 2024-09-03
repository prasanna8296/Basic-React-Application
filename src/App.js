import React from 'react';
// Import the ToDoList component
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* Include the ToDoList component */}
      <ToDoList />
    </div>
  );
}

export default App;
