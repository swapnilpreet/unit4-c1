import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ todoCount }) => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h3>Todo List</h3>
      <span>You have </span>
      <b data-cy="header-remaining-task">{todoCount - 0}</b>
      <span>of </span>
      <b data-cy="header-total-task">{todoCount}</b> <span>remaining </span>
    </div>
  );
};

export default TaskHeader;
