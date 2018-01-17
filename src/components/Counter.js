import React, { Component } from 'react';
import {
  AppResgistry,
  StyleSheet,
  Platfrom,
  TextInput,
  Text,
  TouchableOpacity,
  FlatLiat,
  View,
  Button
} from 'react-native';

import index from 'redux-thunk';

export default class Counter extends React.Component{
  constructor(props){
    super(props);
   
  }

  render(){

    const { val, addNumber, subNumber } = this.props;

    return(
      <View style={style.counter}>
        <Button onPress={ () => subNumber( val - 1 ) } title="Sub" />
          <Text>Counter: {val}</Text>
        <Button onPress={ () => addNumber(val + 1 ) } title="Add" />
      </View>
    );
  }
}

Counter.defaultProps = {
    number : 1
  }
  

const style = StyleSheet.create({
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
  }
)
