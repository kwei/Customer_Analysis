import React, { Component } from 'react';
import PropTypes from 'prop-types';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import SubmitBtn from './component/SubmitBtn.js';
import {
  setData_to_Firebase,
  Permission_FCM,
  SingIn,
  SingOut,
  setNotification,
} from './controller/firebase';

import * as firebase from 'firebase';

import './App.css';

import {
  click_func,
  setImgs,
  getImgs
} from './controller/functionset';

const testTimes = 20;

const config = {
  apiKey: "AIzaSyBFGSrGGRCsiiwH6-rZwwbdjrBXpiv21TY",
  authDomain: "website-375f1.firebaseapp.com",
  databaseURL: "https://website-375f1.firebaseio.com",
  projectId: "website-375f1",
  storageBucket: "website-375f1.appspot.com",
  messagingSenderId: "862137080452"
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,        // the same person test times
      username: "", // the user's name
      lpicType: "", // the pic's type on the left hand
      rpicType: "", // the pic's type on the right hand
      chosen : 'non',
      imgsrc1 : require('./module/img/Bedding/15.jpg'),
      randtopic1 : 'Bedding',
      imgsrc2 : require('./module/img/Children/15.jpg'),
      randtopic2 : 'Children',
      whos: false,
      msg: '',
      counter: 1,
      now: ''
    };
    firebase.initializeApp(config);
  }

  // use fetch post methods
  setDatabase(table){

    var now = this.state.now;

    var state = setData_to_Firebase(firebase, table, now);

    console.log(state);

    fetch('http://localhost:3001/users'/*'http://140.115.213.30:9487/users/database'*/, {
      method: 'post',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: table.testId,
        username: table.userName,
        lpicType: table.picLeft,
        rpicType: table.picRight,
        chosen: table.chosen
      })
    })
      .then((res) =>
        console.log(res)
      )
      .catch((error) =>
        console.log(error)
      );
  }


  handleAlert = function(content){
    var nowTime = new Date().toLocaleString();
    if(window.confirm(content)){
      this.setState({counter: 1});
      this.setState({now: nowTime});
      SingOut(firebase);
      SingIn(firebase);
    }else{
      this.setState({whos: false});
      this.setState({counter: 1});
      this.setState({now: nowTime});
    }
  }

  btonClick = function(side){
    this.setState({chosen: side});
    var dataset = {
      userName: this.state.username,
      testId: 0,
      picLeft: this.state.randtopic1,
      picRight: this.state.randtopic2,
      chosen: side
    }
    var table = click_func(dataset, testTimes);
    this.setDatabase(table);
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

    var counter = this.state.counter;
    console.log(counter);
    if(counter === testTimes){
      this.setState({counter: 1});
      this.handleAlert("已連續完成20題。非常感謝您這次的參與，我們所得的資料都將用於回饋並不會做非法用途。若還想繼續做題請選擇是，感謝您。");
    }else{
      this.setState({counter: counter + 1});
    }
  }

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
    var nowTime = new Date().toLocaleString();
    this.setState({now: nowTime});
  }

  componentDidMount(){
    SingOut(firebase);
    Permission_FCM(firebase);
    setTimeout(() => {
      setNotification(firebase);
    }, 6000);
  }

  // render function
  render() {
    return (
      <div className="App">

        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Paper elevation={4}>
            <Typography variant="headline" component="h3">
              <br/><h2>顧客興趣分析 - Welcome to Customer Analysis System</h2>
            </Typography>
            <Typography component="p">
              我們將為您製作出一張專屬的興趣表，<br/>
              唯一需要做的事情就是選擇你較喜歡的照片。<br/>
              <br/>
            </Typography>
          </Paper>
        </MuiThemeProvider>

        {this.state.whos ?
          <div className="imgbox">
            <div className="left-img">
              <img className="img1" src={this.state.imgsrc1} alt="left_img" />
              <SubmitBtn label="like" btnonClick={() => this.btonClick('left')} isopen={true} message={this.state.msg} />
            </div>
            <div className="right-img">
              <img className="img2" src={this.state.imgsrc2} alt="right_img" />
              <SubmitBtn label="like" btnonClick={() => this.btonClick('right')} isopen={true} message={this.state.msg} />
            </div>
          </div> :
          <div>
            <br/><br/><h3><br/></h3><br/>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <form noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="Your name"
                  value={this.state.name}
                  onChange={(data) => this.setState({username: data.target.value})}
                  margin="normal"/>
              </form>
            </MuiThemeProvider>
            <br/><br/>
            <div>
              <SubmitBtn label="start" btnonClick={function(){
                this.setState({whos: true});
                SingIn(firebase) }.bind(this)}/>
            </div>
            <h3><br/></h3>
          </div>
        }

        <br/><br/><br/><br/><br/><br/>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Paper elevation={1}>
            <Typography component="h3">
              <br/><h4>Thanks for using the Customer Analysis System.</h4>
            </Typography>
            <Typography component="p">
              &copy; 2018 KW<br/><br/>
              We are useing ReactJs and it is awesome!<br/>
              Follow my <a className="link_github" href="https://github.com/">github</a> to get more info.<br/>
              <br/>
            </Typography>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
