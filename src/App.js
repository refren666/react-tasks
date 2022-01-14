import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {

  return (
    <div className='wrapper'>
      <Users/>
      <Posts/>
      <Comments/>
    </div>
  );
}

export default App;
