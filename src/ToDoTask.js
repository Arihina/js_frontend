import React from "react";
import { connect } from "react-redux";

import { todoDelete, todoUpdateState } from './actions';


class ToDoTask extends React.Component {
    constructor(props) {
        super(props);

        this.onStatusClick = this.onStatusClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onStatusClick(e) {
        e.preventDefault();

        fetch(`tasks/${this.props.task._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !this.props.task.done
            })
        }).then((res) => {
            if (res.status === 200) {
                this.props.dispatch(todoUpdateState(this.props.task._id));
            }
            else {
                console.log('not updated');
            }
        });
    }

    onDeleteClick(e) {
        e.preventDefault();

        fetch(`tasks/${this.props.task._id}`, { method: 'DELETE' }).then((res) => {
            if (res.status === 204) {
                this.props.dispatch(todoDelete(this.props.task._id));
            }
            else {
                console.log('not deleted');
            }
        });
    }

    render() {
        return (
            <li>
                <span>{this.props.task.name} </span>
                <span><i>{this.props.task.description}</i> </span>
                <span onClick={this.onStatusClick}><b>{this.props.task.done ? 'Done' : 'Todo'}</b> </span>
                <button onClick={this.onDeleteClick}>Delete</button>
            </li>
        );
    }
}

export default connect()(ToDoTask);
