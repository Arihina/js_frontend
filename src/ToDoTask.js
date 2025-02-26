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

        fetch(`tasks/${this.props.task._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !this.state.done
            })
        }).then((res) => {
            if (res.status === 200) {
                this.setState({
                    done: !this.state.done
                });
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
                this.props.onTaskDelete(this.props.task._id);
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
                <span onClick={this.onStatusClick}><b>{this.state.done ? 'Done' : 'Todo'}</b> </span>
                <button onClick={this.onDeleteClick}>Delete</button>
            </li>
        );
    }
}

export default ToDoTask;
