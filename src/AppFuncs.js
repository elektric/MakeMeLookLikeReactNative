import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import AppFunc from './AppFunc';

export default class AppFuncs extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let appfuncs = this.props.appfuncs.map((af) => {
            return (<AppFunc details={af} key={af.Name}/>);
        })
    return (

      <View>
        <Text style={styles.userID}>Application Functions</Text>
        {appfuncs}
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
