/**
 * Created by Cosmin on 06-01-2017.
 */

import React, {Component} from 'react';
import Comment from './comment';


export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [
                "I like bacon",
                "Want to get ice cream ?",
                "Ok, we have enough comments..."
            ]
        };
    }

    reRenderCommentsArea(){
        this.setState({
            comments:this.state.comments
        });
    }

    handleRemoveComment(i){
        this.state.comments.splice(i, 1);
        this.reRenderCommentsArea();
    }

    handleUpdateComment(newText, i){
        this.state.comments[i] = newText;
        this.reRenderCommentsArea();
    }

    handleAddComment(text){
        this.state.comments.push(text);
        this.reRenderCommentsArea();
    }

    eachComment(text, i) {
        return (
            <Comment
                key={i}
                index={i}
                updateCommentText={(newText, i)=>{this.handleUpdateComment(newText, i)}}
                deleteFromBoard={(item)=>{this.handleRemoveComment(item)}}>
                {text}
            </Comment>
        );
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.handleAddComment("Default Text")}} className="btn btn-info">Add New</button>
                <div className="board">
                    {
                        this.state.comments.map(this.eachComment.bind(this))
                    }
                </div>
                <br/>
            </div>

        );
    }
}
