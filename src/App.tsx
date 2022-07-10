import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Liste from './Components/Liste';
import Focus from './Components/Focus';
import './Style/App.css';
import { Task } from './types';
import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import useLocalStorgae from './hooks/use-local-storage';

function App() {
  let activeClassName = 'underline';
  const [tasks, setTasks] = useLocalStorgae<Task[]>('taks', []);
  const [focusedTaskId, setFocusedTaskId] = useState<string | undefined>(
    undefined
  );

  const addTask = (task: Pick<Task, 'label'>) => {
    const id = nanoid();
    setTasks((tasks) => [
      ...tasks,
      { id, label: task.label, isComplete: false },
    ]);
    if (!focusedTaskId) setFocusedTaskId(id);
  };

  const updateTaskcompletion = (taskId: string, isComplete: boolean) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === taskId) return { ...task, isComplete };
        return task;
      })
    );
  };

  const focusedTask = tasks.find((task) => task.id === focusedTaskId);

  const suffeleFocusedTask = () => {
    setFocusedTaskId(shuffle(tasks.filter((task) => !task.isComplete))[0]?.id);
  };

  const tasksApi = {
    addTask,
    focusedTask,
    tasks,
    setTasks,
    suffeleFocusedTask,
    updateTaskcompletion,
  };

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
