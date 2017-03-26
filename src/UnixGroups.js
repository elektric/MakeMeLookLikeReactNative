import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import UnixGroup from './UnixGroup.js';

export default class UnixGroups extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let unixgroups = this.props.unixgroups.map((ug) => {
            return (<UnixGroup details={ug} key={ug.Name}/>);
        })
    return (

      <View>
        <Text style={styles.userID}>Unix Groups</Text>
        {unixgroups}
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {

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
});
