import TaskManager from "./Components/TaskManager";

import CounterHooks from "./Components/CounterHooks"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Login from "./Components/Login";
function App() {
  return (
   <div>
    <Router>
    <nav>
      <Link to="/taskman">Task Manager</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/login">Login</Link>

    </nav>
    <Routes>
    <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/taskman" element={<TaskManager></TaskManager>}></Route>
      <Route path="/counter" element={<CounterHooks count={0}></CounterHooks>}></Route>
    </Routes>
   
  </Router>
  </div>
 
  );
}
export default App;
