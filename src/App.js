import './App.css';
import {Route, Routes} from "react-router-dom";
import Photo from "./components/Photo/Photo";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Menu/>}>
          <Route path={'photo'} element={<Photo/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
