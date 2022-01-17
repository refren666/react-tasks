import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";
import classes from './Form.module.css'

const Form = ({setTrigger}) => {
  const [formError, setFormError] = useState({});

  const {
    register, handleSubmit, watch, formState: {errors}
  } = useForm({resolver: joiResolver(CarValidator), mode:'onTouched'});
  // resolver - from validation library
  // mode: 'onTouched' - will work when we unfocus our input field

  // register('object key'), contains name of a field, and onChange listener
  // watch(event) - event is a callback. Watch allows to observe the values in the fields every time it changes
  // handleSubmit - takes an argument(function), which collects values from fields. Also prevents default form behavior
  // formState: {errors} - use for form validation with Joi

  /*const submit = (data) => {
    // data - object with input values! (car)
    carService.addCar(data)
      .then(response => console.log(response))
      .catch(err => setFormError(err.response.data))
  }*/

  // same as above but using async/await:
  const submit = async (data) => {
    try {
      const newCar = await carService.addCar(data);
      // console.log(newCar);
      setTrigger(newCar)
    } catch (error) {
      setFormError(error.response.data)
    }
  }

  // watch(event => console.log(event))

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Model:
            <input type="text" defaultValue={''} {...register('model')}/>
          </label>
        </div>
        {/*THIS WILL SHOW THE ERROR BELOW THE MODEL INPUT*/}
        {/*{formError.model && <span>{formError.model[0]}</span>}*/}
        {errors.model && <span className={classes.errorMsg}>{errors.model.message}</span>}
        <div>
          <label>Price:
            <input type="number" defaultValue={''} {...register('price')}/>
          </label>
        </div>
        {/*THIS WILL SHOW THE ERROR BELOW THE PRICE INPUT*/}
        {/*{formError.price && <span>{formError.price[0]}</span>}*/}
        {errors.price && <span className={classes.errorMsg}>{errors.price.message}</span>}
        <div>
          <label>Year:
            <input type="number" defaultValue={''} {...register('year')}/>
          </label>
        </div>
        {/*THIS WILL SHOW THE ERROR BELOW THE YEAR INPUT*/}
        {/*{formError.year && <span>{formError.year[0]}</span>}*/}
        {errors.year && <span className={classes.errorMsg}>{errors.year.message}</span>}
        <button>Send</button>
      </form>

    </div>
  );
};

export default Form;