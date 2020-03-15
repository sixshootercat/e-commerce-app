import React from 'react';
import HomePage from './pages/homepage/HomePage'
import { Switch, Route } from 'react-router-dom'
import './App.css';

const HatsPage = () => (
  <h1>HatsPage</h1>
)

class App extends React.Component {

  render(){
    return (
      <>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>           
      </>
    )
  }
}

export default App;
