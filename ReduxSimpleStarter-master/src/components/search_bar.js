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
            homeLink: props.initialLinkName
        };
        // console.log("Constructor");
    }

    // componentWillMount(){
    // console.log("Component will mount - Immediatly before initial rendering");
    // }
    // componentDidMount(){
    //     console.log("Component did mount - Immediatly after initial rendering");
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log("When compoment receives new props", nextProps);
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("Should component update? Before rendering, after receiving new props/state", nextProps, nextState);
    //     return true;
    // }
    // componentWillUpdate(nextProps, nextState){
    //     console.log("Component will update! Before rendering, after receiving new props/state", nextProps, nextState);
    // }
    // componentDidUpdate(prevProps, prevState){
    //     console.log("Component did update! After component's updates are flushed to DOM", prevProps, prevState);
    // }
    // componentWillUnmount(){
    //     console.log("Component will unmount - Immediatly before removing component from DOM");
    // }

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

                <hr/>

                <input type="text" value={this.state.homeLink} onChange={(event) => {
                    this.onHandleChange(event);
                }}/>
                
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

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        }, () => {
            this.onChangeLink();
        });
    }
}

export default SearchBar;