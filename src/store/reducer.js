const initialState = {
    counter:0
}
const reducer = (state=initialState,action)=>{

    let newState = {...state};
    switch(action.type)
    {
      case "INCREMENT":
        newState.counter+=1;
       break
       case "DECREMENT":
        newState.counter-=1;
      break;
      default:
    }
    
    return newState;
}
export default reducer;