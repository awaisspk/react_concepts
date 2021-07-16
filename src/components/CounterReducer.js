import Redux from '@reduxjs/toolkit';
const initialValue = {
  value: 0,
};

function CounterReducer(state = initialValue, action) {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, value: state.value + 1 };
    case 'counter/decrement':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

export default store = Redux.createStore(CounterReducer);

//Action is object a with field type and payload?
// Reducer a function that calculates the new state based on old state + action
// Store runs the root reducer function whenever a action is dispatched
