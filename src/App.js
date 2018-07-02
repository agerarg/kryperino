import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/test" render={<h1>HOLA TEST</h1>} />
        <p className="App-intro">
        <h4>Redux Test</h4>
          <div><button onClick={this.props.onIncrementCounter}>Increment</button><button onClick={this.props.onDecrementCounter}>onDecrementCounter</button></div>
          <div>{this.props.ctr}</div>
        </p>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    ctr:state.counter
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    onIncrementCounter: ()=> dispatch({type: 'INCREMENT'}),
    onDecrementCounter: ()=> dispatch({type: 'DECREMENT'}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
