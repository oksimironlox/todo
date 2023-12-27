import './Style/App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Main from "./Page/Main";
import Tasks from "./Page/Tasks";

function App() {
  return (
      <HashRouter>
          <Main/>
          <Routes>
              <Route path={"/Monday"} element={<Tasks/>}/>
              <Route path={"/Tuesday"} element={<Tasks/>}/>
              <Route path={"/Wednesday"} element={<Tasks/>}/>
              <Route path={"/Thursday"} element={<Tasks/>}/>
              <Route path={"/Friday"} element={<Tasks/>}/>
              <Route path={"/Saturday"} element={<Tasks/>}/>
              <Route path={"/Sunday"} element={<Tasks/>}/>
          </Routes>
      </HashRouter>
  );
}

export default App;
