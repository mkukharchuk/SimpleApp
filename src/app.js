import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Menu, MenuItem } from '@material-ui/core';
import SignIn from './components/Login/index';

const HomeComponent = () => <div>Hello React</div>;

class App extends Component{
    render(){
      return
      <Router>
        {/* <AppBar>
          <Menu open={true}>
              <MenuItem><Link to="/"> Home </Link></MenuItem>
              <MenuItem><Link to="/signin"> Signin </Link></MenuItem>
          </Menu>
        </AppBar> */}
        <div>
        <Link to="/"> Home </Link>
        <Link to="/signin"> Signin </Link>
        </div>
        <div>
        <Route exact path='/' component={HomeComponent}></Route>
        <Route exact path='/signin' component={SignIn}></Route>
        </div>
      </Router>
    }
}

export default App;