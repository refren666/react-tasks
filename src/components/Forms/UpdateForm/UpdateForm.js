import React from 'react';
import {useForm} from "react-hook-form";

import {carsService} from "../../../services/cars.service";
import classes from '../Forms.module.css'

const UpdateForm = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm();

  const update = (car) => {
    // This updates all fields and they must all be filled
    // carsService.updateById(car.id, car)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err.response.data))

    // This updated only filled fields (more flexible)
    carsService.updateById(car.id,
      (car.model && {model: car.model})
       || (car.price && {price: car.price})
       || (car.year && {year: car.year}))
      .then(response => console.log(response))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div className={classes.formWrapper}>
      <h3>Update car by its ID</h3>

      <form className={classes.form} onSubmit={handleSubmit(update)}>
        <div>
          <label>Select car by ID:
            <br/>
            <input type="number" defaultValue={''} {...register('id')}/>
          </label>
        </div>
        {/*{errors.id && <span>{errors.id.message}</span>}}*/}

        <div>
          <label>New car's model:
            <br/>
            <input type="text" defaultValue={''} {...register('model')}/>
          </label>
        </div>
        {/*{errors.model && <span>{errors.model.message}</span>}*/}

        <div>
          <label>New car's price:
            <br/>
            <input type="number" defaultValue={''} {...register('price')}/>
          </label>
        </div>
        {/*{errors.price && <span>{errors.price.price}</span>}*/}

        <div>
          <label>New car's year:
            <br/>
            <input type="text" defaultValue={''} {...register('year')}/>
          </label>
        </div>
        {/*{errors.year && <span>{errors.year.message}</span>}*/}

        <button className={classes.button}>Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;