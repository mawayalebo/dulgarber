import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";

function App() {
    return ( 
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/signin" exact >
              <SignIn/>
            </Route>
            <Route path="/signup" exact >
              <SignUp/>
            </Route>
          </Switch>
        </Router>
        
      </div>
    );
}

export default App;