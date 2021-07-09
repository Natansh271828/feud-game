import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { questions } from './questions';

import PlayArea from "./pages/playArea";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/question/:number">
            <PlayArea />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
