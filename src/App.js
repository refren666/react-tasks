import React, {useState} from 'react';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

const App = () => {
  const [trigger, setTrigger] = useState(null);

  return (
    <div>
      {/*setTrigger - when we add new car, it'll instantly appear on the page*/}
      <Form setTrigger={setTrigger}/>
      <Cars trigger={trigger}/>
    </div>
  );
};

export default App;