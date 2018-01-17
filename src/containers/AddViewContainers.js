import React, { Component } from 'react';
import {
  AppResgistry,
  StyleSheet,
  Platfrom,
  TextInput,
  Text,
  TouchableOpacity,
  FlatLiat,
  View
} from 'react-native';
import {connect} from 'react-redux';
import AddView from '../components/AddView';
import addTask from '../actions/AddViewActions';

class AddViewContainers extends React.Component{
    
  constructor(props){
    super(props);
    this.state={ newTaskName: ''}
  }


  render(){
    
    
    const onAddNewTask = this.props.onAddNewTask;
    return(
        <AddView onAddNewTask = { onAddNewTask} />
        );
    }
}

export default connect(
  state => {
    return{}
  },
  dispatch => {
    return {
      onAddNewTask: (name) => dispatch(addTask(name))
    }
  }
)(AddViewContainers);