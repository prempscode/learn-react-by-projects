import React, { useState } from "react";
import "./Todo.css";
import LearnReactTodo from "./LearnReactTodo";

const Todo = () => {
  const [task, setTask] = useState("");
  const [alltask, setAlltask] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setAlltask([
      ...alltask,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (index) => {
    const updatedList = alltask.filter((_, i) => i !== index);
    setAlltask(updatedList);
  };

  const markAsDone = (index) => {
    const updatedTasks = [...alltask];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setAlltask(updatedTasks);
  };

  return (
    <>
      <div className="todo-container">
        <div className="input-container">
          <h1>What needs to be done?</h1>

          <div className="input-group">
            <input
              type="text"
              placeholder="Add a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <button className="add-btn" onClick={addTask}>
              Add
            </button>
          </div>
        </div>

        {alltask.length > 0 && <h2 className="heading">Work List</h2>}

        {alltask.length === 0 ? (
          <p className="empty-task">No work to do </p>
        ) : (
          <div className="task-list">
            {alltask.map((item, index) => (
              <div className="task-card" key={index}>
                <span className="task-text">
                  {item.completed ? <del>{item.text}</del> : item.text}
                </span>

                <div className="btn-group">
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>

                  <button
                    className="done-btn"
                    onClick={() => markAsDone(index)}
                  >
                    {item.completed ? "Undo" : "Done"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <LearnReactTodo></LearnReactTodo>
    </>
  );
};

export default Todo;
