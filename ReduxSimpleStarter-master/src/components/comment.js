/**
 * Created by Cosmin on 05-01-2017.
 */

import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    edit() {
        this.setState({editing: true});
    }

    remove() {
        this.props.deleteFromBoard(this.props.index);
    }

    save() {
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
        this.setState({editing: false});
    }

    renderNormal() {
        return (
            <div className="commentContainer">
                <div className="commentText">{this.props.children}</div>
                <button onClick={()=>{this.edit()}} className="btn btn-primary">Edit</button>
                <button onClick={()=>{this.remove()}} className="btn btn-danger">Remove</button>
            </div>
        );
    }

    renderForm() {
        return (
            <div className="commentContainer">
                <textarea cols="100" ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={()=>{this.save()}} className="btn btn-success">Save</button>
            </div>
        );
    }

    render() {
        if (this.state.editing) {
           return this.renderForm();
        } else {
            return this.renderNormal();
        }
    }
}

export default Comment;