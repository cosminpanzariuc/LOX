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

const API_KEY = "AIzaSyCBFqR7YNGbyZMrvD7EZtAxForkNCuD3jk";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            homeLink: "HOME",
            searchMounted: true
        };
        this.handleVideoSearch('');
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

            </div>
        );
    }
}

function Header(props){
    return(
        <div>{props.homeLink}</div>
    );
}


ReactDOM.render(<App />, document.querySelector(".container"));