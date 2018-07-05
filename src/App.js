import React, { Component } from 'react';
import './css/style.css';
import {connect } from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//Components
import Menu from './Components/Header/Menu';
import Logo from './Components/Header/Logo';
import Board from './Components/Board/Board';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <header>
        <Logo />
        <Menu />
      </header>
       <Switch>
          <Route path="/deck" exact render={()=><h1>CARDS</h1>} />
          <Route path="/play" exact component={Board} />
          <Route path="/" exact render={()=><h1>MAIN</h1>} />
         </Switch>
       
      </div>
      </ BrowserRouter>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
