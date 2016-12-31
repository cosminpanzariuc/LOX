/**
 * Created by Cosmin on 28-12-2016.
 */

import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    render(){
        return (
            <div className="search-bar">
                {this.props.children}
                <input
                    placeholder="Search..."
                    value = {this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} />
                <hr/>
            </div>
        );
    }


    onInputChange(term){
        this.setState({term:term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;