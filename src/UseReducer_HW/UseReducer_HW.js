import React, {useReducer} from 'react';

const initialState = {
  counter1: 0,
  counter2: 0,
  counter3: 0
}
const INCREMENT_FIRST_COUNTER = 'INCREMENT_FIRST_COUNTER';
const DECREMENT_FIRST_COUNTER = 'DECREMENT_FIRST_COUNTER';
const RESET_FIRST_COUNTER = 'RESET_FIRST_COUNTER';
const INCREMENT_SECOND_COUNTER = 'INCREMENT_SECOND_COUNTER';
const DECREMENT_SECOND_COUNTER = 'DECREMENT_SECOND_COUNTER';
const RESET_SECOND_COUNTER = 'RESET_SECOND_COUNTER';
const INCREMENT_THIRD_COUNTER = 'INCREMENT_THIRD_COUNTER';
const DECREMENT_THIRD_COUNTER = 'DECREMENT_THIRD_COUNTER';
const RESET_THIRD_COUNTER = 'RESET_THIRD_COUNTER';

const reducer = (state, action) => {
  // console.log(action);

  // reducer accepts action from dispatch and process it into our state
  // if 2 or more properties in state object, i use, e.g: {...state, key: state.key + 1}
  switch (action.type) {
    case INCREMENT_FIRST_COUNTER:
      return {...state, counter1: state.counter1 + 1}
    case DECREMENT_FIRST_COUNTER:
      return {...state, counter1: state.counter1 - 1}
    case RESET_FIRST_COUNTER:
      return {...state, counter1: action.payload}
    case INCREMENT_SECOND_COUNTER:
      return {...state, counter2: state.counter2 + 1}
    case DECREMENT_SECOND_COUNTER:
      return {...state, counter2: state.counter2 - 1}
    case RESET_SECOND_COUNTER:
      return {...state, counter2: action.payload}
    case INCREMENT_THIRD_COUNTER:
      return {...state, counter3: state.counter3 + 1}
    case DECREMENT_THIRD_COUNTER:
      return {...state, counter3: state.counter3 - 1}
    case RESET_THIRD_COUNTER:
      return {...state, counter3: action.payload}
    default:
      throw new Error('INVALID ACTION')
  }
}

const UseReducer_HW = () => {
  //  useReducer( 1) reducer - function that contains action which changes state, 2) object - initial state of reducer )
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Counter #1: {state.counter1}</div>
                          {/* we dispatch action, which is an OBJECT, which contains TYPE to our reducer */}
      <button onClick={() => dispatch({ type: INCREMENT_FIRST_COUNTER })}>+</button> {' '}
      <button onClick={() => dispatch({ type: DECREMENT_FIRST_COUNTER })}>-</button> {' '}
      <button onClick={() => dispatch({ type: RESET_FIRST_COUNTER, payload: 0 })}>Reset</button>

      <div>Counter #2: {state.counter2}</div>
      {/* we dispatch action, which is an OBJECT, which contains TYPE to our reducer */}
      <button onClick={() => dispatch({ type: INCREMENT_SECOND_COUNTER })}>+</button> {' '}
      <button onClick={() => dispatch({ type: DECREMENT_SECOND_COUNTER })}>-</button> {' '}
      <button onClick={() => dispatch({ type: RESET_SECOND_COUNTER, payload: 0 })}>Reset</button>

      <div>Counter #3: {state.counter3}</div>
      {/* we dispatch action, which is an OBJECT, which contains TYPE to our reducer */}
      <button onClick={() => dispatch({ type: INCREMENT_THIRD_COUNTER })}>+</button> {' '}
      <button onClick={() => dispatch({ type: DECREMENT_THIRD_COUNTER })}>-</button> {' '}
      <button onClick={() => dispatch({ type: RESET_THIRD_COUNTER, payload: 0 })}>Reset</button>
    </div>
  );
};

export default UseReducer_HW;