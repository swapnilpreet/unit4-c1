import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTodo }) => {
  // NOTE: do not delete `data-cy` key value pair
  let [value, setValue] = useState("");
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={value}
        placeholder="Add task..."
        onChange={(e) => {
          setValue(e.target.value);
          // console.log(e.target.value)
        }}
      />
      <button
        data-cy="add-task-button"
        disabled={!value}
        onClick={() => {
          addTodo(value);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
