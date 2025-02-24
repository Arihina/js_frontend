import React from "react";

import ToDoTask from './ToDoTask';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    fetch('tasks').then(function (res) {
      return res.json();
    }).then((data) => {
      this.setState({
        tasks: data
      });
    });
  }

  render() {
    function mapToDoList(task) {
      return (
        <ToDoTask task={task} key={task._id} />
      )
    }

    return (
      <div className="App">
        <ul>
          {
            this.state.tasks.map(mapToDoList)
          }
        </ul>
      </div>
    );
  }
}

export default App;
