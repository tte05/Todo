import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import { TodoList } from './pages/ToDoList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
