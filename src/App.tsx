import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Focus from './Views/FocusView';
import Liste from './Views/ListeView';
import TaskContext from './contexts/task-store';
import useLocalStorage from './hooks/use-local-storage';
import './Style/App.css';
import { Task } from './types';
import { GlobalStyle } from './Style/styles';

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 35px;
  min-height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  background: #f6d9ef;
  color: #6a6969;
  height: 62px;
  width: 120px;
  align-items: center;
  text-decoration: none;
  display: flex;
  justify-content: center;

  &:first-child {
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
  }

  &:last-child {
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
  }

  &:underlines {
    background: #93bcd7;
    color: #fff;
    font-weight: bold;
  }
`;

function App() {
  let activeClassName = 'underlines';
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <TaskContext.Provider value={[tasks, setTasks]}>
        <Layout>
          <Nav>
            <TabButton
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              List
            </TabButton>
            <TabButton
              to="/focus"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Focus
            </TabButton>
          </Nav>
          <br />
          <Routes>
            <Route path="/" element={<Liste />} />
            <Route path="/focus" element={<Focus />} />
          </Routes>
        </Layout>
      </TaskContext.Provider>
    </BrowserRouter>
  );
}

export default App;
