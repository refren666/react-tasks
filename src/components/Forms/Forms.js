import React from 'react';
import PostForm from "./PostForm/PostForm";
import DeleteForm from "./DeleteForm/DeleteForm";
import UpdateForm from "./UpdateForm/UpdateForm";

const Forms = () => {
  return (
    <div>
      <PostForm />
      <DeleteForm />
      <UpdateForm />
    </div>
  );
};

export default Forms;