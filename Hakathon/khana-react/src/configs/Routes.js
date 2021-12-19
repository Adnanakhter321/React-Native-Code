import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import admin from "../screens/admin";
const Routess = () => {
 
  
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/' component={admin} />
        {/* <Route path='/' component={ReactBones} /> */}
      </Switch>
    </Router>
  )
}

export default Routess;