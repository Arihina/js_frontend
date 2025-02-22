import React from "react";

class App extends React.Component {
  render() {
    const data = [
      { "_id": "67b74eee9d931865e9f746d2", "name": "task 1", "discription": "None", "done": false },
      { "_id": "67b74f2d9d931865e9f746d3", "name": "task 2", "discription": "None", "done": false },
      { "_id": "67b750ba9b7a7dc53cb0a379", "name": "task 3", "discription": "None", "done": false },
      { "_id": "67b7544c3ebc5b32e5f26c44", "name": "task 4", "discription": "None", "done": false }
    ];

    function mapToDoList(task) {
      return (
        <li key={task._id}>{task.name}</li>
      )
    }

    return (
      <div className="App">
        <ul>
          {
            data.map(mapToDoList)
          }
        </ul>
      </div>
    );
  }
}

export default App;
