const initState = {name: "Long", id: 1}

const rootReducer = (state = initState, action) => {
  console.log(state);
  return state;
} 

export default rootReducer;