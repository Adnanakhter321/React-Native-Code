import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NeedyHome from '../screens/NeedyHome';
import SignIn from '../screens/SignIn'
import Signup from '../screens/Signup';
import { collection, query, onSnapshot, db, onAuthStateChanged, auth } from "../configs/Firebase";
import { useEffect, useState } from 'react';
import { cnicData, currentUser, AcceptedFood } from "../Actions/Action"
import { useDispatch, useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

export default function Routes() {
  let dispatch = useDispatch()
  useEffect(() => {
    const q = query(collection(db, "FoodRequests"));
    const q2 = query(collection(db, "AcceptedFoodRequests"));


    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          dispatch(cnicData(change.doc.data()))
        }
      });
    });
    onSnapshot(q2, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          dispatch(AcceptedFood(change.doc.data()))
        }
      });
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(currentUser(user))
      }
    });
  }, [])

  // useEffect(() => {
  // }, []);
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