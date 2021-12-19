import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react"
import AcceptedRe from "../screens/AcceptedR";
import AddBranchM from "../screens/AddBranchM";
import admin from "../screens/admin";
import adminLogin from "../screens/AdminLogin"
import RejectedR from "../screens/RejectedR";
import { useDispatch } from "react-redux";
import { collection, query, onSnapshot, db } from "../configs/Firebase"
import { FoodRequest } from "../Actions/Actions";
const Routess = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(db, "FoodRequests"));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          dispatch(FoodRequest(change.doc.data()))
        }
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/adminpanelpendingrequests' component={admin} />
        <Route exact path='/adminpanel-accepted-requests' component={AcceptedRe} />
        <Route exact path='/adminpanel-rejected-requests' component={RejectedR} />
        <Route exact path='/adminpanel-addbranch-manager-c' component={AddBranchM} />
        <Route path='/' component={adminLogin} />
      </Switch>
    </Router>
  )
}

export default Routess;