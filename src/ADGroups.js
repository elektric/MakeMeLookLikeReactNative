import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import ADGroup from './ADGroup';

export default class ADGroups extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let adgroups = this.props.adgroups.map((adg) => {
            return (<ADGroup details={adg} key={adg.Name}/>);
        })
    return (

      <View>
        <Text style={styles.userID}>Active Directory Groups</Text>
        {adgroups}
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
