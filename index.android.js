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
var userList = "Kal1730"
var REQUEST_URL = 'http://s258948.nml.com:52820/api/users/details/' + userList;
console.log(REQUEST_URL);

export default class make_me_look_like extends Component {
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

AppRegistry.registerComponent('make_me_look_like', () => make_me_look_like);
