import React, { useState } from 'react';

// Define ToDoItem as a separate component
const ToDoItem = ({ todo, onToggleCompletion, onChangeTitle, onChangeDescription }) => {
  return (
    <div className='todo-item'>
      {/* Title input to edit the to-do title */}
      <input 
        type="text" 
        value={todo.title} 
        onChange={(e) => onChangeTitle(e.target.value)} 
        placeholder="Enter Title"
        className="todo-title"
      />
      {/* Description input to edit the to-do description */}
      <input 
        type="text" 
        value={todo.description} 
        onChange={(e) => onChangeDescription(e.target.value)} 
        placeholder="Enter Description"
        className="todo-description"
      />
      {/* Checkbox to toggle the completion status */}
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={onToggleCompletion}
      />
      <span className='todo-status'>{todo.completed ? 'completed' : 'not completed'}</span>
    </div>
  );
};

// Define ToDoList as a separate component
const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  // Add a new to-do item
  const addTodo = () => {
    const newTodo = {
      title: '',
      description: '',
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle the completion status of a to-do
  const toggleTodoCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Update the title of a to-do item
  const updateTodoTitle = (index, newTitle) => {
    const updatedTodos = [...todos];
    updatedTodos[index].title = newTitle;
    setTodos(updatedTodos);
  };

  // Update the description of a to-do item
  const updateTodoDescription = (index, newDescription) => {
    const updatedTodos = [...todos];
    updatedTodos[index].description = newDescription;
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <button onClick={addTodo}>Add To-Do Item</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <ToDoItem 
              todo={todo} 
              onToggleCompletion={() => toggleTodoCompletion(index)} 
              onChangeTitle={(newTitle) => updateTodoTitle(index, newTitle)}
              onChangeDescription={(newDescription) => updateTodoDescription(index, newDescription)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the ToDoList component as default
export default ToDoList;
