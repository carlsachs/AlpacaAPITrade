import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//page components
import Home from "./components/Home";
import Account from "./components/Account";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
