import React, { Component } from 'react';
import Home from './components/Home';
import Movies from './components/movies'
import { Router, Switch } from 'react-router-dom'
import MovieInfo from './components/movieInfo';

//   case value:
    
//     break;

//   default:
//     break;
// }}
//   case value:
    
//     break;

//   default:
//     break;
// }}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props}/>}/> 
          <Route exact path='/movies' render={(props) => <Movies {...props}/>}/> 
          <Route exact path='/movieInfo:id' render={(props) => <MovieInfo {...props}/>}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
