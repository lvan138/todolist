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


export default class AddView extends React.Component{
    
  constructor(props){
    super(props);
    this.state={ newTaskName: ''}
  }


  render(){
    const onAddNewTask= this.props.onAddNewTask;
    return(
      <View style={style.addView}>
        <Text style={{ fontSize:19, marginBottom:10,color:'#CD5C5C'}}>TO DO LIST</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex:9, flexDirection:'row',borderWidth:1}}>
            <TextInput
            style={style.input}
            placeholder="Thêm task vào đây!"
            onChangeText={(text) => this.setState({newTaskName:text})}
            value={this.state.newTaskName}
            onSubmitEditing={() => onAddNewTask(this.state.newTaskName)}
            />
          </View>
          <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={() => onAddNewTask(this.state.newTaskName)}>
            <View style={style.button}>
              <Text style={{color:'white'}}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>  
      </View>
        );
    }
}

const style = StyleSheet.create({
    addView: {
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'white'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    input:{
      flex:1, flexDirection:'row'
    }
});
