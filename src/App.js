import {Route, Routes} from "react-router-dom";

import {CarPhoto, CatPhoto, DogPhoto, GirlPhoto, Menu, NotebookPhoto} from "./components";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Menu/>}>
          <Route path={'cat-photo'} element={<CatPhoto/>}/>
          <Route path={'car-photo'} element={<CarPhoto/>}/>
          <Route path={'dog-photo'} element={<DogPhoto/>}/>
          <Route path={'girl-photo'} element={<GirlPhoto/>}/>
          <Route path={'notebook-photo'} element={<NotebookPhoto/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
