import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarById} from "../../store";
import {CarValidator} from "../../validators/car.validator";
import classes from './Form.module.css'

const Form = () => {
  const {
    register, handleSubmit, reset, setValue, formState: {errors}
  } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});
  const dispatch = useDispatch();
  const {carForUpdate} = useSelector(state => state.carReducer);

  const submit = (data) => {
    if (carForUpdate) {
      dispatch(updateCarById({ id: carForUpdate.id, car: data }))
    } else {
      // диспатчим пейлоад (дані) з форми в екшн слайсу з машинами !
      dispatch(createCar({data: data}))
    }
    reset()
  }

  useEffect(() => {
    if (carForUpdate) {
      setValue('model', carForUpdate.model)
      setValue('price', carForUpdate.price)
      setValue('year', carForUpdate.year)
    }
  }, [carForUpdate])

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

      <button className={'button'}>{carForUpdate ? 'Update' : 'Add'}</button>
    </form>
  );
};

export {Form};