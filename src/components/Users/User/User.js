import classes from './User.module.css'

const User = ({user, getUserId}) => {
  const {id, name, email} = user;

  return (
    <div>
      <h2>{id} {name} {email}</h2>
      <button className={classes.button} onClick={() => getUserId(id)}>Get details</button>
    </div>
  );
};

export default User;