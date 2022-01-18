import React from 'react';

import PostForm from "./PostForm/PostForm";
import DeleteForm from "./DeleteForm/DeleteForm";
import UpdateForm from "./UpdateForm/UpdateForm";

const Forms = ({setTrigger}) => {
  return (
    <div>
      <PostForm setTrigger={setTrigger}/>
      <DeleteForm setTrigger={setTrigger}/>
      <UpdateForm setTrigger={setTrigger}/>
    </div>
  );
};

export default Forms;