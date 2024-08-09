  import React, { useState } from 'react';
  import '../../styles/App.css'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Añadir nueva tarea"
      />
      <div>
        {tasks.length === 0 ? (
          <p>No hay tareas, añadir tareas</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="task-item">
                {task}
                <span
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>Número de tareas: {tasks.length}</p>
    </div>
  );
}

export default App;

