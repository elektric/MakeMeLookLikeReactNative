import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import AppFuncs from './AppFuncs';
import ADGroups from './ADGroups';
import UnixGroups from './UnixGroups';
export default class UserDetails extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.userID}>{this.props.user.UserID}</Text>
        <Text style={styles.userName}>{this.props.user.LastName}, {this.props.user.FirstName}</Text>
        <View style={styles.container}>
          <ScrollView>
          <AppFuncs appfuncs={this.props.user.AppFuncs}/>
          <ADGroups adgroups={this.props.user.ADGroups}/>
          <UnixGroups unixgroups={this.props.user.UnixGroups}/>
          </ScrollView>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //backgroundColor: 'powderblue',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  userName: {
   fontSize: 20,
   color: '#51b',
   marginBottom: 8,
   textAlign: 'center',
   //backgroundColor: 'skyblue',

 },
 userID: {
   color: '#51b',
   fontSize: 30,
   textAlign: 'center',
   //backgroundColor: 'steelblue',
 },
 scroll: {
  flex: 1,
   //backgroundColor: 'steelblue',
 },

});
