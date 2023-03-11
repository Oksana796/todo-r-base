import React, { useState } from "react";

let id = 0;
let INIT = [
  { id: id++, item: "Buy a flat" },
  { id: id++, item: "Buy a car" },
  { id: id++, item: "Find a job" },
];

function App() {
  const [newTask, setNewTask] = useState("");
  const [list, setList] = useState(INIT);

  const addNewTask = (e) => {
    e.preventDefault();
    setList(() => list.concat({ id: id++, item: newTask }));
    setNewTask("");
  };

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="Add new task"
        />
        <button onClick={addNewTask}>Add</button>
      </div>
      <div>
        <ul>
          {list.map(({ id, item }) => (
            <li key={id}>
              {item}
              <button
                onClick={() => {
                  setList(list.filter((task) => task.id !== id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
