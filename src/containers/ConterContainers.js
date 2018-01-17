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

import {connect} from 'react-redux';
import index from 'redux-thunk';
import Counter from '../components/Counter';
import addNumber,{ subNumber} from '../actions/CounterViewActions';

class CounterContainers extends React.Component{
  constructor(props){
    super(props);
   
  }

  render(){

    const { addNumber, subNumber } = this.props;
    const {number } = this.props.number;
    return(
        <Counter val= {number} {...this.props}/>
    );
  }
}

Counter.defaultProps = {
    number : 1
  }
  
export default connect(
  state => {
    return {
     number: state.number
    }
  },
  dispatch => {
    return {
     addNumber: (val) => dispatch( addNumber(val)),
     subNumber: (val) => dispatch( subNumber(val))
    }

  }
)(CounterContainers);