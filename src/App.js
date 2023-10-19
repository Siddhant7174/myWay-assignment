
import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import OngoingTasks from './components/OnGoingTask';
import CompletedTasks from './components/CompletedTasks';

function App() {
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    setOngoingTasks([...ongoingTasks, task]);
  };

  const completeTask = (index) => {
    const completedTask = ongoingTasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    setOngoingTasks(ongoingTasks.filter((task, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Task Board</h1>
      </div>
      <div className="container">
        <div className="AddTask">
          <AddTask addTask={addTask} />
        </div>
        <div className="OngoingTasks">
          <OngoingTasks ongoingTasks={ongoingTasks} completeTask={completeTask} />
        </div>
        <div className="CompletedTasks">
          <CompletedTasks completedTasks={completedTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
