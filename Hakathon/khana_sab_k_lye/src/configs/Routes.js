import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NeedyHome from '../screens/NeedyHome';
import SignIn from '../screens/SignIn'
import Signup from '../screens/Signup';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
      <Stack.Navigator initialRouteName="Khana Sab Ke Lye">
        <Stack.Screen name="Signup" component={Signup} options={{
            headerTitleAlign:'center',
            headerShown:false
        }} />
        <Stack.Screen name="Signin" component={SignIn} options={{
            headerTitleAlign:'center',
            headerShown:false
        }} />
        <Stack.Screen name="Khana Sab Ke Lye" component={NeedyHome} options={{
            headerTitleAlign:'center',
            headerShown:false
        }} />
      </Stack.Navigator>
  );
}