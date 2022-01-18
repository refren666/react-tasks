import './App.css';
import Forms from "./components/Forms/Forms";
import Cars from "./components/Cars/Cars";
import {useState} from "react";

function App() {
  const [trigger, setTrigger] = useState(null);

  return (
    <div>
      <Forms setTrigger={setTrigger}/>
      <Cars trigger={trigger}/>
    </div>
  );
}

export default App;
