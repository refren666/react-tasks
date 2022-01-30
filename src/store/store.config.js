import {configureStore} from '@reduxjs/toolkit';

import carReducer from "./car.slice";

const store = configureStore({
  // кожна пропертя редюсера(слайс, для прикладу carReducer) - це окремий шматок загального стейту + його функції
  // слайси створюються під окремі сутності(юзери, пости, коментарі і т.д)
  reducer: {
    carReducer: carReducer
  }
})

export default store;