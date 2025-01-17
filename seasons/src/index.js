/**
 * Created by Cosmin on 30-04-2019.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDIsplay';
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude: </div>
// };

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     };
    // }

    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        console.log('My component was rendered to the screen');

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated');
    }


    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request"/>
    }


    render(){return <div className="border red">{this.renderContent()}</div>

    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));