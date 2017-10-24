/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import {Header} from './component/common';
import LoginForm from './component/LoginForm';



export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBlk7yDsttwFNz4n_pDJS-Nw4tEy2x4AXs',
      authDomain: 'auth-87426.firebaseapp.com',
      databaseURL: 'https://auth-87426.firebaseio.com',
      projectId: 'auth-87426',
      storageBucket: 'auth-87426.appspot.com',
      messagingSenderId: '958648002235'
    });
  }

  render() {
    return (
      <View>
        <Header headerText= "Authentication" />
        <LoginForm />
      </View>
     
    );
  }
}
 