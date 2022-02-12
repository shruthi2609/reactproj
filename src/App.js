import TaskManager from "./Components/TaskManager";

import CounterHooks from "./Components/CounterHooks"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Login from "./Components/Login";
import Profile from "./Components/Profile";

import HooksParent from "./Components/HooksParent";
import ContactBooks from "./Components/ContactBook";
import TodoAPI from "./Components/TodoAPI";
function App() {
  return (
   <div>
     { /*  <Router>
    <nav>
  <Link to="/taskman">Task Manager</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/login">Login</Link>
     <Link to="/hlc">hlc</Link>
     <Link

    </nav>
    <Routes>
    <Route path="/phone" element={<ContactBooks></ContactBooks>}></Route>
    <Route path="/hlc" element={<HooksParent></HooksParent>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/profile/:userName/:location" element={<Profile></Profile>}></Route>
     <Route path="/taskman" element={<TaskManager></TaskManager>}></Route>
    {/*   <Route path="/counter" element={<CounterHooks count={0}></CounterHooks>}></Route>
    </Routes>
   
  </Router>*/}
  <TodoAPI></TodoAPI>
  </div>
 
  );
}
export default App;
