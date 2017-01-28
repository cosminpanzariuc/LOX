/**
 * Created by Cosmin on 24-01-2017.
 */

import React from "react";

export default class CreateTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }
    }

    renderError(){
        if(!this.state.error){
            return null;
        }
        return(
            <div style={{color: "red"} }>
                <strong>{this.state.error}</strong>
            </div>
        )
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do..." ref="createInput"/>
                <button>Create</button>
                {this.renderError()}
            </form>
        )
    }

    handleCreate(event) {
        event.preventDefault();
        this.refs.createInput.focus();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if(validateInput){
            this.setState({error: validateInput});
            return;
        }

        this.setState({
            error: null
        });
        this.props.createTask(task);
        this.refs.createInput.value = "";
    }

    validateInput(task){
        if(!task){
            return "Plese enter a task..."
        }else if(_.find(this.props.todos, (todo) => todo.task === task)){
            return "Task already exists!"
        }else{
            return null;
        }
    }

}
