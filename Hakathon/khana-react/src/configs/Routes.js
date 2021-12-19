import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import admin from "../screens/admin";
import adminLogin from "../screens/adminLogin"
const Routess = () => {
 
  
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/adminpanel' component={admin} />
        <Route path='/' component={adminLogin} />
      </Switch>
    </Router>
  )
}

export default Routess;