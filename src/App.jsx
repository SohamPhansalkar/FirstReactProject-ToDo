import React, { useEffect, useState } from 'react';

import AddBtn from './components/AddBtn';
import List from './components/List';
import Header from './components/Header';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <>
      <Header />
      <AddBtn onAdd={addTask} />
      <List tasks={tasks} onDelete={deleteTask} />
    </>
  );
}


export default App
