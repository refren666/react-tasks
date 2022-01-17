import React, {useState} from 'react';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

const App = () => {
  const [trigger, setTrigger] = useState(null);

  // when we add new car, it'll instantly appear on the page
  const update = (data) => {
    setTrigger(data)
  }

  return (
    <div>
      <Form update={update}/>
      <Cars trigger={trigger}/>
    </div>
  );
};

export default App;