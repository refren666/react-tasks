import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../../services/cars.service";

const PostForm = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm()

  const addCar = (car) => {
    carsService.addNew(car).then(response => console.log(response))
  }

  return (
    <>
      <h3>Add car with this form: </h3>
      <form onSubmit={handleSubmit(addCar)}>
        <div>
          <label>Model:
            <input type="text" defaultValue={''} {...register('model')}/>
          </label>
        </div>
        <div>
          <label>Price:
            <input type="number" defaultValue={''} {...register('price')}/>
          </label>
        </div>
        <div>
          <label>Year:
            <input type="number" defaultValue={''} {...register('year')}/>
          </label>
        </div>
        <button>Add car</button>
      </form>
    </>
  );
};

export default PostForm;