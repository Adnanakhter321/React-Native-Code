import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NeedyHome from '../screens/NeedyHome';
import SignIn from '../screens/SignIn'
import Signup from '../screens/Signup';
import { collection, query, onSnapshot, db, onAuthStateChanged, auth } from "../configs/Firebase";
import { useEffect, useState } from 'react';
import { cnicData, currentUser } from "../Actions/Action"
import { useDispatch, useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function Routes() {
  let dispatch = useDispatch()
  const [cnicD, setcnicD] = useState('')
  const cnic = useSelector((State) => State.todoReducer.cnic)
  useEffect(() => {
    const q = query(collection(db, "FoodRequests"));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          dispatch(cnicData(change.doc.data()))
          setcnicD(change.doc.data())
        }
      });
    });
  }, [])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(currentUser(user))
      }
    });
  }, []);
  useEffect(() => {
    console.log(cnic);
  }, [cnicD]);


  return (
    <Stack.Navigator initialRouteName="Khana Sab Ke Lye">
      <Stack.Screen name="Signup" component={Signup} options={{
        headerTitleAlign: 'center',
        headerShown: false
      }} />
      <Stack.Screen name="Signin" component={SignIn} options={{
        headerTitleAlign: 'center',
        headerShown: false
      }} />
      <Stack.Screen name="Khana Sab Ke Lye" component={NeedyHome} options={{
        headerTitleAlign: 'center',
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}