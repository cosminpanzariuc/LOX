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

    handleRemoveComment(i){
        let arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({
            comments:arr
        });
    }

    handleUpdateComment(newText, i){
        let arr = this.state.comments;
        arr[i] = newText;
        this.setState({
            comments:arr
        });
    }

    handleAddComment(text){
        let arr = this.state.comments;
        arr.push(text);
        this.setState({
            comments:arr
        });
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
