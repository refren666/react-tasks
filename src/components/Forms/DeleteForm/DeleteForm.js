import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../../services/cars.service";

const DeleteForm = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm();

  const deleteCarById = (data) => {
    console.log({data})
    carsService.deleteById(data.carId).then(response => console.log(response))
  }

  return (
    <>
      <h3>Delete car by its id with this form:</h3>

      <form onSubmit={handleSubmit(deleteCarById)}>
        <div>
          <label> Car ID:
            <input type="number" defaultValue={''} {...register('carId')}/>
          </label>
        </div>
        <button>Delete car</button>
      </form>
    </>
  );
};

export default DeleteForm;