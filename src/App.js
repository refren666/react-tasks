import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./pages/Layout/Layout";
import EpisodesPage from "./pages/Episodes/EpisodesPage";
import EpisodePage from "./pages/Episodes/EpisodePage/EpisodePage";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'episodes'} element={<EpisodesPage/>}/>
          <Route path={'/episodes/:episodeId'} element={<EpisodePage/>}/>
          <Route index element={<EpisodesPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
