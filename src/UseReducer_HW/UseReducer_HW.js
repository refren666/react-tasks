import React, {useReducer} from 'react';

const initialState = {counter: 0}
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state, action) => {
  // console.log(action);
  // console.log(state);

  // reducer accepts action from dispatch and process it into our state
  // if 2 or more properties in state object, i use, e.g: {...state, key: state.key + 1}
  switch (action.type) {
    case INCREMENT:
      return {counter: state.counter + 1}
    case DECREMENT:
      return {counter: state.counter - 1}
    case RESET:
      return {counter: action.payload}
    default:
      throw new Error('INVALID ACTION')
  }
}

const UseReducer_HW = () => {
  //  useReducer( 1) reducer - function that contains action which changes state, 2) object - initial state of reducer )
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Counter: {state.counter}</div>
                          {/* we dispatch action, which is an OBJECT, which contains TYPE to our reducer */}
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button> {' '}
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button> {' '}
      <button onClick={() => dispatch({ type: RESET, payload: 0 })}>Reset</button>
    </div>
  );
};

export default UseReducer_HW;