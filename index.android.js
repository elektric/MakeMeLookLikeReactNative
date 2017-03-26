/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import UserDetails from './src/UserDetails.js';
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var REQUEST_URL = 'http://192.168.1.217:52820/api/users/details/KAL1730';

export default class programming_horror extends Component {
  constructor(props){
    super(props);
    this.state = {
            userDetails: null
          };

  }
  componentDidMount() {
   this.fetchData();
 }
 fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          userDetails: responseData,
        });
        console.log("set userDetails");
      })
      .done();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading User Details...
        </Text>
      </View>
    );
  }

  renderUser(user){
    return (
      <UserDetails user={user}/>
    );
  }

  render() {
    if (!this.state.userDetails) {
      return this.renderLoadingView();
    }
    return this.renderUser(this.state.userDetails);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('programming_horror', () => programming_horror);
