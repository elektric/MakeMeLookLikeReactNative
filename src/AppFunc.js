import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
} from 'react-native';

export default class AppFuncs extends Component {
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
              {this.props.details.Name}(
              {this.props.details.AuthLevel})
            </Text>
            <Text style={styles.appfuncDescriptionStyle}>
              {this.props.details.Description}
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
  container: {

    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //backgroundColor: 'powderblue',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  slider: {

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
