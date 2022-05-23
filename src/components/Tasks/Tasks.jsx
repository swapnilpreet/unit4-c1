import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({ todo, onDelete, taskdata,checkBoxHandler }) => {
  // NOTE: do not delete `data-cy` key value pair
  console.log(taskdata);
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}

        <Task todo={todo.value} onDelete={onDelete} checkBoxHandler={checkBoxHandler} />
      </div>
    </>
  );
};

export default Tasks;