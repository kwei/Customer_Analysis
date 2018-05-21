import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class SubmitBtn extends Component {
  constructor(props){
    super(props);
    this.state = {
      submit_open: false,
    }
  }

  render() {
    return (
      <div className="btbox">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <RaisedButton
            onClick={this.props.btnonClick}
            label={this.props.label}/>
          <Snackbar
            className="snackbar"
            open={this.props.isopen}
            message={this.props.message}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SubmitBtn;
