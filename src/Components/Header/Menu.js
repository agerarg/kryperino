import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Menu extends Component {

    render(){
            return   <div class="nav"> <NavLink to="/" exact>Main</NavLink>  <NavLink to="/deck" exact>Cards</NavLink> <NavLink to="/play" exact>Play</NavLink> </div>
    }

}


export default Menu;