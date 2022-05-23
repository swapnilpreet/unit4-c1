import React from "react";
import TaskApp from "./components/TaskApp";
import "./App.css"
import tasksdata from "./data/tasks.json"
function App() {
  return <div>

    <TaskApp tasksdata={tasksdata}/>
  </div>;
}

export default App;
