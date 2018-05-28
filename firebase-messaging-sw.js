importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase.js');
// importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-auth.js');
importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/4.0.0/firebase-functions.js');
// var firebase = require("firebase/app");
// var auth = require("firebase/auth");
// var messaging = require("firebase/messaging");
// var functions = require("firebase/functions");
//
const config = {
  apiKey: "AIzaSyBFGSrGGRCsiiwH6-rZwwbdjrBXpiv21TY",
  authDomain: "website-375f1.firebaseapp.com",
  databaseURL: "https://website-375f1.firebaseio.com",
  projectId: "website-375f1",
  storageBucket: "website-375f1.appspot.com",
  messagingSenderId: "862137080452"
};

firebase.initializeApp(config);
//
const messaging = firebase.messaging();
//
messaging.setBackgroundMessageHandler((payload) => {

  const title = "FCM testing"
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);
});

//curl -X POST --header "Authorization: key=AAAAyLtf2oQ:APA91bGJzco93OMPccA_lO-03M90Tsin8tl9yEirP3N-D38lbY8IhzusuVsDaR3ZQXORhIKSyK0V2AMXSyVD3uOZU_EgaZ74Vk0fj31VJVRxLgiIB3Fcyxg8-GS6Nx7XZJikw0dzzZWb" \ --Header "Content-Type: application/json" \ https://fcm.googleapis.com/fcm/send \ -d "{\"to\":\"fuLSS8C6Y6Q:APA91bF8DDN5hONC8zU6OzOq6BGyPk4EZwTJlR33IbiN-I0jNZF4GweYX7Ig85u9qaroN3wfCZmsUbTPOVjlq4u1aZRm-jWhtQb9h2WjlJ1ouMIoIBGaIHrVXP9Aigbe2OX1cSAsKpgB\",\"notification\":{\"title\" : \"You have a new message!\",\"body\":\"This is an Notification!\"}}"
