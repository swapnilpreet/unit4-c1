import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = ({ taskdata }) => {
  // NOTE: do not delete `data-cy` key value pair
  let [todos, setTodos] = useState([]);
  let [todoCount, setTodoCount] = useState(0);

  const addTodo = (listtodo) => {
    setTodos([...todos, { value: listtodo }]);
    todoCount++;
    setTodoCount(todoCount);
    // console.log(todos, listtodo);
  };
  const onDelete = (value) => {
    // console.log("value is getting", value);
    let d_todo = todos.filter((todo) => todo.value !== value);
    setTodos(d_todo);
    todoCount--;
    setTodoCount(todoCount);
    // console.log(d_todo);
  };

  const checkBoxHandler = (compVal) => {
    // console.log(compVal);
    if (compVal === true) {
      todoCount--;
      setTodoCount(todoCount);
    } else {
      todoCount++;
      setTodoCount(todoCount);
    }
  };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todoCount={todoCount} />
      {/* Add Task */}
      <AddTask addTodo={addTodo} />
      {/* Tasks */}
      {todos.map((todo) => (
        <Tasks
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          checkBoxHandler={checkBoxHandler}
          tasksdata={taskdata}
        />
      ))}
    </div>
  );
};

export default TaskApp;
