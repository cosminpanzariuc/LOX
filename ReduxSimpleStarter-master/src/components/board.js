/**
 * Created by Cosmin on 06-01-2017.
 */

import React, {Component} from 'react';
import Comment from './comment';


class Board extends Component {

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

    removeComment(i){
        let arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({
            comments:arr
        });
    }

    updateComment(newText, i){
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({
            comments:arr
        });
    }

    add(text){
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
                updateCommentText={(newText, i)=>{this.updateComment(newText, i)}}
                deleteFromBoard={(item)=>{this.removeComment(item)}}>
                {text}
            </Comment>
        );
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.add("Default Text")}} className="btn btn-info">Add New</button>
                <div className="board">
                    {
                        this.state.comments.map(this.eachComment.bind(this))
                    }
                </div>
            </div>

        );
    }
}

export default Board;