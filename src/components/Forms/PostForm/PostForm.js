import React from 'react';
import {useForm} from "react-hook-form";

import classes from '../Forms.module.css'
import {carsService} from "../../../services/cars.service";

const PostForm = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm()

  const addCar = (car) => {
    carsService.addNew(car)
      .then(response => console.log(response))
      .catch(err => console.log(err.response.data))
  }

  return (
    <div className={classes.formWrapper}>
      <h3>Add car: </h3>
      <form className={classes.form} onSubmit={handleSubmit(addCar)}>
        <div>
          <label>Model:
            <br/>
            <input type="text" defaultValue={''} {...register('model')}/>
          </label>
        </div>
        {/*{errors.model && <span>{errors.model.message}</span>}*/}

        <div>
          <label>Price:
            <br/>
            <input type="number" defaultValue={''} {...register('price')}/>
          </label>
        </div>
        {/*{errors.price && <span>{errors.price.message}</span>}*/}

        <div>
          <label>Year:
            <br/>
            <input type="number" defaultValue={''} {...register('year')}/>
          </label>
        </div>
        {/*{errors.year && <span>{errors.year.message}</span>}*/}

        <button className={classes.button}>Add car</button>
      </form>
    </div>
  );
};

export default PostForm;