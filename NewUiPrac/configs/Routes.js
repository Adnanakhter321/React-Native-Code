import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Signin'>
                <Stack.Screen options={{headerShown:false}} name="Signin" component={SignIn} />
                <Stack.Screen options={{headerShown:false}} name="Signup" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App2;