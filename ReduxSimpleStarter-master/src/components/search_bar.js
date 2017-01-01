/**
 * Created by Cosmin on 28-12-2016.
 */

import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            term: '',
            age: props.initialAge,
            homeLink: "CHANGED LINK"
        };
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    render(){
        return (
            <div className="search-bar">
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
                <p>Your age is {this.state.age}</p>

                {this.props.children}

                <input
                    placeholder="Search..."
                    value = {this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} />

                <div>
                    <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                </div>

                <div>
                    <button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
                </div>

            </div>
        );
    }

    onMakeOlder(){
       this.setState({
           age: this.state.age + 3
       });
    }
    onInputChange(term){
        this.setState({term:term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;