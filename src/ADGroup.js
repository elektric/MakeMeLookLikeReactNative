import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ADGroup extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.appfuncStyle}>
          {this.props.details.Name}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

 appfuncStyle: {
   color: '#511',
   fontSize: 16,
   textAlign: 'center',
   marginBottom: 1,
   //backgroundColor: 'steelblue',
 },
 appfuncDescriptionStyle: {
   color: '#951',
   fontSize: 12,
   textAlign: 'center',
   marginBottom: 10,
   //backgroundColor: 'steelblue',
 },
});
