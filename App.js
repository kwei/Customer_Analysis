import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

import Email from 'material-ui/svg-icons/communication/email';
import Person from 'material-ui/svg-icons/social/person';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import SubmitBtn from './component/SubmitBtn.js';
import FloatingBtn from './component/FloatBtn.js';

import './App.css';

import {
  click_func,
  setImgs,
  getImgs
} from './controller/functionset';

const toolbar = {
  backgroundColor: '#ffffff',
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,        // the same person will have the same id number
      username: "", // the user's name
      lpicType: "", // the pic's type on the left hand
      rpicType: "", // the pic's type on the right hand
      chosen : ' ',
      imgsrc1 : require('./module/img/Bedding/15.jpg'),
      randtopic1 : 'Bedding',
      imgsrc2 : require('./module/img/Children/15.jpg'),
      randtopic2 : 'Children',
      submit : null,
      submit_open: false,
      left_open: false,
      right_open: false,
      msg : '',
    };
  }

  // use fetch post methods
  setDatabase(){
    var id = this.state.id,
        username = this.state.username,
        lpicType = this.state.lpicType,
        rpicType = this.state.rpicType,
        chosen = this.state.chosen;
    fetch('https://ed4844fc.ngrok.io'/*'http://localhost:3001/users'*/, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        username: username,
        lpicType: lpicType,
        rpicType: rpicType,
        chosen: chosen
      })
    })
      .then((res) => console.log(res))
      .then((req) => console.log(req))
      .catch((error) => console.log(error));
  }

  btonClick = function(side){
    this.setDatabase();
    if(side === 'left' || side === 'right'){
      this.setState({chosen: side});
      var dataset = {
        userName: 'KW',
        testId: 0,
        picLeft: this.state.randtopic1,
        picRight: this.state.randtopic2,
        chosen: side
      }
      var table = click_func(dataset);
      this.setState({
        msg: table.userName + " #" + table.testId + "  [ " + table.picLeft + " / " + table.picRight + " ] chosen: " + table.chosen,
      });
      var id = table.testId,
          username = table.userName,
          lpicType = table.picLeft,
          rpicType = table.picRight,
          chosen = table.chosen;
      this.setState({
        id: id,
        username: username,
        lpicType: lpicType,
        rpicType: rpicType,
        chosen: chosen
      });
      var imgset = getImgs(this.state.imgsrc1, this.state.imgsrc2);
      this.setState({
        imgsrc1 : imgset.imgsrc1,
        imgsrc2 : imgset.imgsrc2,
        randtopic1 : imgset.randtopic1,
        randtopic2 : imgset.randtopic2,
        chosen : side,
      });
    }else if(side === 'submit'){
      this.setState({
        submit_open: true,
      });
    }
  }

  handleRequestClose = () => {
    this.setState({
      submit_open: false,
      left_open: false,
      right_open: false,
    });
  };

  // before render
  componentWillMount(){
    var imgsrc = setImgs();
    console.log(imgsrc);
    var imgset = getImgs(this.state.imgsrc1, this.state.imgsrc2);
      this.setState({
        imgsrc1 : imgset.imgsrc1,
        imgsrc2 : imgset.imgsrc2,
        randtopic1 : imgset.randtopic1,
        randtopic2 : imgset.randtopic2,
      });
  }

  // use fetch get methods
  getDatabase(){
    
  }

  // after render
  componentDidMount(){
    /*fetch(`/users/`)
      //.then(res => console.log(res.headers.get('content-type')))
      .then((res) => res.json())
      .catch((error) => console.log(error))
      //.then((users) => console.log(users))
      .then((users) => this.setState({ users: [{id: users.id, username: users.username}] }))
      .catch((error) => console.log(error));
      //.then(() => console.log(this.state.users));*/
  }

  // render my database info to the page
  renderDatabase(){
    return this.state.users.map(users => {
      return (
        <li key={users.id}>{users.username}</li>
      );
    })
  }

  // render function
  render() {
    return (
      <div className="App">

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Toolbar style={toolbar}>
            <ToolbarGroup firstChild={true}>
              <FlatButton
                target="_blank"
                hoverColor="#f0f0f0"
                label="About me"
                primary={true}
                icon={<Person />}/>
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarSeparator />
              <FlatButton
                target="_blank"
                hoverColor="#f0f0f0"
                label="Mail me"
                primary={true}
                icon={<Email />}/>
            </ToolbarGroup>
            </Toolbar>
        </MuiThemeProvider>

        <header className="App-header">
          <h1 className="App-title">Welcome to Customer Analysis System</h1>
          <h4 className="App-subtitle">
            This system will make your own intrests table.<br/>
            The only thing you need to do is to choose the picture which you like.
          </h4>
        </header>

        <div className="imgbox">
          <div className="left-img">
            <img className="img1" src={this.state.imgsrc1} alt="left_img" />
            <SubmitBtn btnonClick={() => this.btonClick('left')} isopen={true} message={this.state.msg} />
          </div>
          <div className="right-img">
            <img className="img2" src={this.state.imgsrc2} alt="right_img" />
            <SubmitBtn btnonClick={() => this.btonClick('right')} isopen={true} message={this.state.msg} />
          </div>
        </div>

        <div className="footer">
          <h3 className="footer-title">Thanks for useing the Customer Analysis System</h3>
          <h5 className="footer-subtitle">
            &copy; 2018 KW<br/><br/>
            We are useing ReactJs and it is awesome!<br/>
            Follow my <a className="link_github" href="https://github.com/">github</a> to get more info.
          </h5>
        </div>
      </div>
    );
  }
}

export default App;
