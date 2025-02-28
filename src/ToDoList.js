import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import ToDoTask from './ToDoTask';


class ToDoList extends React.Component {
  render() {
    return (
      <div className="List">
        <NavLink to='/add'>Add task</NavLink>
        <ul>
          {
            this.props.tasks.map((task) => {
              return (
                <ToDoTask task={task} key={task._id} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateProps(state) {
  return {
    tasks: [...state.tasks]
  }
}

export default connect(mapStateProps)(ToDoList);
