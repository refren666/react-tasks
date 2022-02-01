import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";
import classes from './Form.module.css'

const Form = () => {
  const {
    register, handleSubmit, reset, formState: {errors}
  } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});

  const dispatch = useDispatch();

  const submit = (data) => {
    // диспатчим пейлоад (дані) з форми в екшн слайсу з машинами !
    dispatch(createCar({data: data}))
    reset()
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(submit)}>
      <div>
        <label>Model: <br/>
          <input type="text" {...register('model')}/>
        </label>
      </div>
      {errors.model && <div className={classes.formError}>{errors.model.message}</div>}

      <div>
        <label>Price: <br/>
          <input type="text" {...register('price')}/>
        </label>
      </div>
      {errors.price && <div className={classes.formError}>{errors.price.message}</div>}

      <div>
        <label>Year: <br/>
          <input type="text" {...register('year')}/>
        </label>
      </div>
      {errors.year && <div className={classes.formError}>{errors.year.message}</div>}

      <button className={classes.button}>Add</button>
    </form>
  );
};

export {Form};