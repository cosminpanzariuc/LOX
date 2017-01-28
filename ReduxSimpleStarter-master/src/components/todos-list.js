/**
 * Created by Cosmin on 24-01-2017.
 */

import React from "react";
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        return (this.props.todos.map((todo, index) =>
                <TodosListItem
                    key={index}
                    idx={index}
                    {...todo}
                    toggleTask={this.props.toggleTask}
                    saveTask={this.props.saveTask}
                    deleteTask={this.props.deleteTask}
                />
            // <TodosListItem task={todo.task} isCompleted={todo.isCompleted}/>
        ));
    }

    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}