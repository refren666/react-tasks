import './App.css';
// import {ClassComponentLifecycle} from "./components/ClassComponentLifecycle/ClassComponentLifecycle";
import {useState} from "react";
import FunctionalComponentLifecycle from "./components/FunctionalComponentLifecycle/FunctionalComponentLifecycle";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <> {/*if flag === true, show component, else hide it (for componentWillUnmount)!*/}
      {/*{flag && <ClassComponentLifecycle prop={'i am prop'}/>} /!*changes true to false and vice versa*!/*/}
      {flag && <FunctionalComponentLifecycle prop={'i am prop'}/>} {/*changes true to false and vice versa*/}
      <button onClick={() => setFlag(prevState => !prevState)}>Show/Hide</button>
    </>
  );
}

export default App;
