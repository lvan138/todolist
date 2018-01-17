let appState = {
    data: [
      {title:'danh rang', isFinished: true},
      {title:'rua mat', isFinished: false},
      {title:'di hoc', isFinished: false},
      {title:'len lab', isFinished:false},
    ]
  }
const taskListReducer = (state = appState, action) => {
    let newTaskList = state.data;
    switch(action.type){
      case 'ADD':
      const newTask= {title: action.taskName, isFinished:false}
      return { ...state,data:[...state.data, newTask]}
  
      case 'FINISH':
      newTaskList[action.atIndex].isFinished=true;
      //phai return ra state
      return {
       ...state, data: newTaskList
      };
     
      case 'DELETE':  
      newTaskList = newTaskList.filter((item, i)=>i !==action.atIndex);
      return {
        ...state,data:newTaskList
      };
      default:
      return state;
    }
}

export default taskListReducer;