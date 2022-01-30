import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    // диспатчим пейлоад (дані) з форми в екшн слайсу з машинами !
    dispatch(createCar({data: data}))
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>Model: <input type="text" {...register('model')}/> </label>
      <label>Price: <input type="text" {...register('price')}/> </label>
      <label>Year: <input type="text" {...register('year')}/> </label>
      <button>Process</button>
    </form>
  );
};

export {Form};