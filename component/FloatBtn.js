import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Comment from 'material-ui/svg-icons/communication/comment';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const toolbar = {
  backgroundColor: '#ffffff',
};

class FloatingBtn extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Toolbar style={toolbar}>
          <ToolbarGroup firstChild={true}>
          </ToolbarGroup>
          <ToolbarGroup>
            <FloatingActionButton>
              <Comment />
            </FloatingActionButton>
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    );
  }
}

export default FloatingBtn;