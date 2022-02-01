import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carService} from "../services";

export const getAllCars = createAsyncThunk(
  'carSlice/getAllCars',
  async (_, {rejectWithValue}) => {
    try {
      return await carService.getAll();
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export const createCar = createAsyncThunk(
  'carSlice/createCar',
  async ({data}, {dispatch}) => {
    try {
      const newCar = await carService.create(data); // data - form values (model, price, year)
      dispatch(addCar({data: newCar}))
    } catch (e) {
      console.log(e)
    }
  }
)

export const deleteCarById = createAsyncThunk(
  'carSlice/deleteCarById',
  async ({id}, {dispatch}) => {
    try {
      await carService.deleteById(id)
      dispatch(deleteCar({id}))
    } catch (e) {
      console.log(e)
    }
  }
)

// createSlice - створює окрему частинку стору, і методи(екшени) для його управління
const carsSlice = createSlice({
  name: 'carSlice',
  initialState: {
    cars: [],
    status: null,
    error: null
  },
  reducers: {
    // це (reducers) можна сприймати як набір action type
    addCar: (state, action) => {
      state.cars.push(action.payload.data)
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload.id)
    },
    updateCar: (state, action) => {

    }
  },
  extraReducers: {
    [getAllCars.pending]: (state) => {
      // pending allows to show Loading component
      state.status = 'pending'
      state.error = null
    },
    [getAllCars.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.cars = action.payload // результат відпрацювання блоку try в асинхронній ф-ї. Повертає масив машин з АПІшки
    },
    [getAllCars.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
      // action = result of rejectWithValue(e.message); to be precise, the message of error from catch block
    }
  }
})

// carReducer = carSlice (під капотом - вже готовий редюсер з світчем і готовими кейсами під екшени + initialState)
const carReducer = carsSlice.reducer;

// carSlice.actions = carSlice --> reducers ;
export const {addCar, deleteCar} = carsSlice.actions;

export default carReducer;