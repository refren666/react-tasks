import React from 'react';
import {useForm} from "react-hook-form";

import {carsService} from "../../../services/cars.service";
import classes from '../Forms.module.css'

const DeleteForm = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm();

  const deleteCarById = (data) => {
    console.log({data})
    carsService.deleteById(data.id).then(response => console.log(response))
  }

  return (
    <div className={classes.formWrapper}>
      <h3>Delete car by its ID:</h3>

      <form className={classes.form} onSubmit={handleSubmit(deleteCarById)}>
        <div>
          <label> Car ID:
            &nbsp;
            <input type="number" defaultValue={''} {...register('id')}/>
          </label>
        </div>
        {/*{errors.id && <span>{errors.id.message}</span>}*/}

        <button className={classes.button}>Delete car</button>
      </form>
    </div>
  );
};

export default DeleteForm;