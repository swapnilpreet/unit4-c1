import React from "react";
import { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ todo, onDelete,checkBoxHandler }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input
        type="checkbox"
        data-cy="task-checkbox"
        onChange={(e) => {
          console.log(e.target.checked);
          setIsCompleted(e.target.checked);
          checkBoxHandler(e.target.checked);

        }}
      />
      <div className={isCompleted ? styles.strikeds : ""} data-cy="task-text">
        {" "}
        <p>{todo}</p>
      </div>
      {/* Counter here */}
      <Counter />
      <button onClick={() => onDelete(todo)} data-cy="task-remove-button">
        X
      </button>
    </li>
  );
};

export default Task;
