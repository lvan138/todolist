const numberReducer = (state = {number: 1}, action) => {
    switch(action.type){
      case 'ADD_NUMBER':
      return {
        ...state, number: state.number+1 
      };
  
      case 'SUB_NUMBER':
      return {
        ...state, number: state.number-1
      };
  
      default:
      return state;
    }
}
export default numberReducer;
