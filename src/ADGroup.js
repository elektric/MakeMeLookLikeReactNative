import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
} from 'react-native';

export default class ADGroup extends Component {
  constructor(props){
    super(props);
    this.state = {
            switchOn: true,
          };
  }
  render() {
    return (
        <View style={styles.splitViewOuter}>
          <View style={styles.splitViewInnerLeft}>
          <Text style={styles.appfuncStyle}>
            {this.props.details.Name}
          </Text>
        </View>
        <View style={styles.splitViewInnerRight}>
        <Switch style={styles.splitViewInnerRight} onValueChange={(value) => this.setState({switchOn: value})}
          value={this.state.switchOn} />
        </View>
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
 splitViewOuter: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-around',
 },
 splitViewInnerLeft: {
   flex: 1,
   //justifyContent: 'center',
 },
 splitViewInnerRight: {
   //flex: 1,
   //justifyContent: 'center',
 },
});
