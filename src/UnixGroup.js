import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class UnixGroup extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.unixGroupStyle}>
          {this.props.details.Name}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

 unixGroupStyle: {
   color: '#511',
   fontSize: 16,
   textAlign: 'center',
   marginBottom: 1,
   //backgroundColor: 'steelblue',
 },
 
});
