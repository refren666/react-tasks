import React, {useReducer} from 'react';
import Cat from "../components/Cat/Cat";

const initialFormState = {
  catName: '',
  dogName: '',
  catNamesArray: [],
  dogNamesArray: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE INPUT':
      return {...state, [action.field]: action.payload}
    case 'add cat':
      state.catNamesArray.push(state.catName);
      state.catName = '';
      state.dogName = '';
      return state
    default:
      return state;
  }
}

const UseReducer_CW = () => {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const inputHandler = (e) => {
    dispatch({
      type: 'HANDLE INPUT',
      field: e.target.name,
      payload: e.target.value
    })
  }

  const addCat = (e) => {
    e.preventDefault();
    dispatch({type: 'add cat'})
    console.log(state.catNamesArray)
  }

  const addDog = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <form>
        <label> Add Cat:
          <input type="text" name='catName' value={state.catName} onChange={inputHandler}/>
        </label>
        <button onClick={addCat}>Save</button>
        <label> Add Dog:
          <input type="text" name='dogName' value={state.dogName} onChange={inputHandler}/>
        </label>
        <button onClick={addDog}>Save</button>
      </form>

      <hr/>

      {state.catNamesArray.length ? state.catNamesArray.map(
        (catNames, index) => <Cat key={index} catNames={catNames}/>
      ) : null}

    </div>


  );
};

export default UseReducer_CW;
