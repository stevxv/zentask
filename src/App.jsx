import React, { useState, useEffect } from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import NavegationBar from "./components/NavegationBar";
import Footer from "./components/Footer";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, index) => {
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updaqueTasks = tasks.filter((task, index) => index !== activeCard);

    updaqueTasks.splice(index, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updaqueTasks);
  };

  return (
    <div className="app">
      <NavegationBar />
      <main>
        <TaskForm setTasks={setTasks} />
        <div className="app_tasks_area">
          <TaskColumn
            taskColumnName="Flow Mode"
            taskColumnDescription="Puede esperar un poco"
            tasks={tasks}
            status="flow"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            taskColumnName="Zen Mode"
            taskColumnDescription="Debe hacerse hoy"
            tasks={tasks}
            status="zen"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            taskColumnName="Calm Mode"
            taskColumnDescription="Sin prisa, cuando haya tiempo"
            tasks={tasks}
            status="calm"
            handleDelete={handleDelete}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
