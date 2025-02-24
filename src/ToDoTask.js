import React from "react";

class ToDoTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.task.done
        }

        this.onStatusClick = this.onStatusClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onStatusClick(e) {
        e.preventDefault();

        this.setState({
            done: !this.state.done
        });
    }

    onDeleteClick(e) {
        e.preventDefault();

        fetch(`tasks/${this.props.task._id}`, { method: 'DELETE' }).then((res) => {
            if (res.status === 204) {
                this.props.onTaskDelete(this.props.task._id);
            }
            else {
                console.log('not deleted');
            }
        });
    }

    render() {
        return (
            <li onClick={this.onStatusClick}>{this.props.task.name} - {this.state.done ? 'Done' : 'Todo'} <button onClick={this.onDeleteClick}>Delete</button></li>
        );
    }
}

export default ToDoTask;
