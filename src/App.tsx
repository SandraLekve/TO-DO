import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Liste from './Components/Liste';
import Focus from './Components/Focus';
import './Style/App.css';
import { Task } from './types';

function App() {
  let activeClassName = 'underline';
  const [tasks, setTasks] = useState<Task[]>([]);

  const updateTaskcompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const tasksApi = { tasks, setTasks, updateTaskcompletion };

  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          List
        </NavLink>
        -{'  '}
        <NavLink
          to="/focus"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Focus
        </NavLink>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<Liste {...tasksApi} />} />
        <Route path="/focus" element={<Focus {...tasksApi} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
