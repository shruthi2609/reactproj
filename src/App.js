import TaskManager from "./Components/TaskManager";

import CounterHooks from "./Components/CounterHooks"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
  return (
   <div>
    <Router>
    <nav>
      <Link to="/taskman">Task Manager</Link>
      <Link to="/counter">Counter</Link>
    </nav>
    <Routes>
      <Route path="/taskman" element={<TaskManager></TaskManager>}></Route>
      <Route path="/counter" element={<CounterHooks></CounterHooks>}></Route>
    </Routes>
   
  </Router>
  </div>
 
  );
}
export default App;
