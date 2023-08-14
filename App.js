// App.js
import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';

const App = () => {
  return (
    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
};

export default App;
