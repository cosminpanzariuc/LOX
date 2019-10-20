import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/seacrh-box/search-box.component'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };

        //this.handlechange = this.handlechange.bind(this);
    }

    handlechange = (e) => {
        this.setState({searchField: e.target.value})
    };

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder="Search monsters..."
                    handleChange={this.handlechange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters:users}));
    }
}


export default App;

