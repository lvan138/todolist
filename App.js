import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet
} from 'react-native';


import AddView from './src/components/AddView';
import TaskFlatList from './src/components/TaskFlatList';
import CounterContainers from './src/containers/ConterContainers';
import AddViewContainers from './src/containers/AddViewContainers';
import TaskListContainers from './src/containers/TaskListContainers';
//import reducer

import numberReducer from './src/reducers/NumberReducer';
import taskListReducer from './src/reducers/TaskListReducer';

import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, combineReducers,applyMiddleware} from 'redux';

//State



//Reducer
//reducer to do list

//reducer conter


//Store,vì ở đây có một reducer neenk cần gộp reducer
//gộp reducer

const store = createStore(
  combineReducers({
    number: numberReducer,
    taskList: taskListReducer
  })
  );

export default class App extends Component{
  constructor (props){
    super (props);
    this.state = {
      data: [
        {title:'danh rang', isFinished: true},
        {title:'rua mat', isFinished: false},
        {title:'di hoc', isFinished: false},
        {title:'len lab', isFinished:false},
      ]
    };
  }

  render(){
    return(
      <Provider store={ store }>
      <View style={ style.container}>
       <AddViewContainers/>
        <CounterContainers />
        <TaskListContainers />  
      </View>
      </Provider>
    );
  } 
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#CD5C5C'
  }
});