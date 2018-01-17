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
  FlatList
} from 'react-native';

import { connect} from 'react-redux';
import TaskFlatList from '../components/TaskFlatList';
import finishTask, {deleteTask} from '../actions/TaskListViewActions';
class TaskListContainers extends React.Component{
  renderItem = ({item, index}) => {
    
    //dang lấy ở cha app truyền vàoact
    const { onFinishedItem, onDeleteItem } = this.props;
    return (
          <TaskFlatList {...this.props}/>
        );
      }
  render(){

   const {data} = this.props.listData;
    const {onFinishedItem, onDeleteItem} = this.props;
    return(
      <TaskFlatList dataList= {data} {...this.props}/>
    );
  }
}

//truyên component vào
export default connect(
  state=>{
  return {
    //map state khi co mot reducr
    // listData: state

    //map khi co nhieu reducer thi phai dan
    //phai map them number vao
    listData: state.taskList,    
    numb: state.number
  }},
  dispatch => {
    return{
    onFinishedItem: (index)=> dispatch(finishTask(index)),
    onDeleteItem : (index)=> dispatch(deleteTask(index))
    }
  }
)(TaskListContainers);

