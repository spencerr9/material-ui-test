import React, { Component } from 'react';
import Hello from './Components/Hello';
import There from './Components/There';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/core/IconButton'
// import { createMuiTheme } from '@material-ui/core/styles';
import SimpleModalWrapped from './Components/ModalComponent';
import IconButtons from './Components/IconsComponent';

import './App.css';
import { Button } from '@material-ui/core';

class App extends Component {
  constructor(){
    super()

    this.state = {
      open: false,
      show: null,
      openModal: false
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  showHello = () => {
    this.setState({show: 'Hello', open: false})
  }

  showThere = () => {
    this.setState({show: 'There', open: false})
  }

  handleModalOpen = () => {
    this.setState({ openModal: true })
  }

  handleModalClose = () => {
    this.setState({ openModal: false })
  }

  render() {
    let content = null

    switch(this.state.show){
      case 'Hello':
        content = (<Hello />);
        break;
      
      case 'There':
        content = (<There />);
        break;

      default: content = <h3>Waiting...</h3>
    }

  //   const theme = createMuiTheme({
  //     overrides: {
  //         MuiButton: {
  //             root: {
  //                 background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%',
  //                 borderRadius: 3,
  //                 border: 0,
  //                 color: 'white',
  //                 height: 48,
  //                 padding: '0 30px',
  //                 boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  //             },
  //         },
  //     },
  // });
  

    return (
      <div className="App">
        {/* <AppBar
          iconClassNameRight = 'muidocs-icon-navigation-expand-more'
          title = 'Learn about Drawer, MenuItem and Paper'
          onLeftIconButtonClick = {this.handleToggle}
        /> */}
        <header>
          <div>
            <IconButton color='inherit' aria-label='menu' >
              <MenuIcon />
            </IconButton>
          </div>
        </header>
        <Drawer 
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>

          <AppBar title='appbar' />
          <MenuItem onClick={this.showHello}>Show Hello</MenuItem>
          <MenuItem onClick={this.showThere}>Show There</MenuItem>

        </Drawer>
        <Paper zDepth={5} >
          {content}
          <Button variant='contained' color='primary' >Button</Button>
        </Paper>

        {/* MODAL PRACTICE */}
        {/* <RaisedButton>Modal</RaisedButton> */}
        <SimpleModalWrapped />
        <IconButtons />
      </div>
    );
  }
}

export default App;
