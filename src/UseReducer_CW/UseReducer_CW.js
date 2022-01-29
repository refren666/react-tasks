import React, {useReducer} from 'react';

import Cat from "../components/Cat/Cat";
import Dog from "../components/Dog/Dog";

const initialFormState = {
  catName: '',
  dogName: '',
  catNamesArray: [],
  dogNamesArray: []
}

const actions = {
  handleInput: 'handle-input',
  addCat: 'add-cat',
  addDog: 'add-dog',
  deleteCat: 'delete-cat',
  deleteDog: 'delete-dog',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.handleInput:
      return {...state, [action.key]: action.value}
    case actions.addCat:
      return {...state, catNamesArray: [...state.catNamesArray , state.catName]}
    case actions.addDog:
      return {...state, dogNamesArray: [...state.dogNamesArray , state.dogName]}
    case actions.deleteCat:
      return {...state, catNamesArray: [...state.catNamesArray.filter(cat => cat !== action.payload.cat)]}
    case actions.deleteDog:
      return {...state, dogNamesArray: [...state.dogNamesArray.filter(dog => dog !== action.payload.dog)]}
    default:
      return state;
  }
}

const UseReducer_CW = () => {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const inputHandler = (e) => {
    dispatch({
      type: actions.handleInput,
      key: e.target.name,
      value: e.target.value
    })
  }

  const addCat = (e) => {
    e.preventDefault();
    !state.catNamesArray.includes(state.catName) && dispatch({type: actions.addCat})
  }

  const addDog = (e) => {
    e.preventDefault();
    !state.dogNamesArray.includes(state.dogName) && dispatch({type: actions.addDog})
  }

  const deleteCat = (cat) => {
    dispatch({type: actions.deleteCat, payload: {cat}})
  }

  const deleteDog = (dog) => {
    dispatch({type: actions.deleteDog, payload: {dog}})
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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
        <div>
          {state.catNamesArray.length ? state.catNamesArray.map(
            (catName, index) => <Cat
              key={index}
              catName={catName}
              deleteCat={deleteCat}/>
          ) : null}
        </div>

        <div>
          {state.dogNamesArray.length ? state.dogNamesArray.map(
            (dogName, index) => <Dog
              key={index}
              dogName={dogName}
              deleteDog={deleteDog}/>
          ) : null}
        </div>
      </div>

    </div>


  );
};

export default UseReducer_CW;
