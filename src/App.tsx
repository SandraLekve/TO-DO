import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Focus from './Components/Focus';
import Liste from './Components/Liste';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import './Style/App.css';
import { Task } from './types';

function App() {
  let activeClassName = 'underline';
  const [tasks, setTasks] = useLocalStorage<Task[]>('taks', []);

  return (
    <BrowserRouter>
      <TaskContext.Provider value={[tasks, setTasks]}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            List
          </NavLink>
          -{'  '}
          <NavLink
            to="/focus"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Focus
          </NavLink>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<Liste />} />
          <Route path="/focus" element={<Focus />} />
        </Routes>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
