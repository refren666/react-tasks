import React from 'react';
import {useForm} from "react-hook-form";

const UpdateForm = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm();
  return (
    <>
      <h3>Update car by its id</h3>

      <form>

      </form>
    </>
  );
};

export default UpdateForm;