/**
 * Created by Cosmin on 28-12-2016.
 */

import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Board from './components/board';
import TodosList from './components/todos-list';
import CreateTodo from './components/create-todo';


const API_KEY = "AIzaSyCBFqR7YNGbyZMrvD7EZtAxForkNCuD3jk";

const todos = [
    {
        task: "Make React tutorial",
        isCompleted: false
    },
    {
        task: "Eat dinner",
        isCompleted: true
    }
];


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            homeLink: "HOME",
            searchMounted: true,
            todos: todos
        };
        // this.handleVideoSearch('');
    }

    handleVideoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    handleChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    handleGreet(){
        alert("Hello!");
    }

    handleChangeSearchMounted(){
        this.setState({
            searchMounted: !this.state.searchMounted
        });
    }

    render(){
        const videoSearch = _.debounce((term) => this.handleVideoSearch(term), 300);

        let searchComponent = "";
        if(this.state.searchMounted){
            searchComponent = (
                <SearchBar
                    videoSearch = {videoSearch}
                    initialAge = {27}
                    initialLinkName = {this.state.homeLink}
                    greet = {this.handleGreet}
                    changeLink={(newName) => this.handleChangeLinkName(newName)}>
                        <p>Search your video...</p>
                </SearchBar>
            );
        }

        return (
            <div>

                <Header homeLink={this.state.homeLink}/>

                <div>
                    {searchComponent}
                    <button onClick={() => this.handleChangeSearchMounted()} className="btn btn-primary">(Un)Mount Search Component</button>
                </div>

                <VideoDetail currentVideo = {this.state.selectedVideo}/>

                <VideoList
                    video_list={this.state.videos}
                    handleVideoSelect={(selectedVideo) => this.setState({selectedVideo:selectedVideo})}
                />

                <Board />

                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />

            </div>
        );
    }


    createTask(task){
        this.state.todos.push({
            task:task,
            isCompleted: false
        });
        this.setState({
            todos:this.state.todos
        });
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, (todo) => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask){
        const foundTodo = _.find(this.state.todos, (todo) => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, (todo) => todo.task === taskToDelete)
        this.setState({todos: this.state.todos});
    }
}

function Header(props){
    return(
        <div>{props.homeLink}</div>
    );
}


ReactDOM.render(<App />, document.querySelector(".container"));