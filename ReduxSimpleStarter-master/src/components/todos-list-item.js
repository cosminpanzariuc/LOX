/**
 * Created by Cosmin on 24-01-2017.
 */

import React from "react";

export default class TodosListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        }
    }

    renderTaskSection(){
        // const {task, isCompleted} = this.props;
        const taskStyle = {
            color: this.props.isCompleted ? "green" : "red",
            cursor: "pointer"
        };

        if(this.state.isEditing){
            return(
                <td>
                    <input type="text" defaultValue={this.props.task} ref="editInput"/>
                </td>
            );
        }

        return(
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, this.props.task)}>
                {this.props.task}
            </td>
        );
    }

    renderActionsSections(){
        if(this.state.isEditing){
            return(
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return(
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                {/*<button onClick={this.props.deleteTask.bind(this, this.props.idx)}>Delete</button>*/}
                <button onClick={this.props.deleteTask.bind(null, this.props.task)}>Delete</button>
            </td>
        );
    }


    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSections()}
            </tr>
        )
    }

    onEditClick(){
        this.setState({
            isEditing: true
        }, function(){
            this.refs.editInput.focus();
        });
    }

    onCancelClick(){
        this.setState({
            isEditing: false
        });
    }

    onSaveClick(){
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }
}