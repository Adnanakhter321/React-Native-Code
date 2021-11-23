import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home2 from '../screens/Home';
import Library from '../screens/Library';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Shop from '../screens/Shop';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign"
function App2() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Signin'}>
                <Stack.Screen options={{headerShown:false}} name="Signin" component={SignIn} />
                <Stack.Screen options={{headerShown:false}} name="Signup" component={SignUp} />
                <Stack.Screen options={{headerShown:false}} name="StackNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function TabNavigator() {
        return (
                <Tab.Navigator
    
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
    
                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home';
                            }
                            else if (route.name === 'Library') {
                                iconName = focused ? 'library' : 'library';
                            }
                            else if (route.name === 'Profile') {
                                iconName = focused ? 'school' : 'school-outline';
                            }
                            else if (route.name === 'Search') {
                                iconName = focused ? 'search' : 'search';
                            }
                            else if (route.name === 'Shop') {
                                iconName = focused ? 'shoppingcart' : 'shoppingcart';
                            }
    
                            // You can return any component that you like here!
                            if (route.name === 'Shop') {
                                return <AntDesign name={iconName} size={size} color={color} />;
                            }
                            else {
                                return <Ionicons name={iconName} size={size} color={color} />;
                            }
                        },
                        tabBarActiveTintColor: 'white',
                        tabBarInactiveBackgroundColor: '#171e23',
                        tabBarActiveBackgroundColor: '#eb6a2b',
                        tabBarStyle: {
                            paddingHorizontal: 30,
                            paddingBottom: 5,
                            paddingVertical: 5,
                            borderRadius: 50,
                            backfaceVisibility: 'hidden',
                            backgroundColor: '#171e23',
                            marginBottom: 10,
                        },
                    })}
                >
                    <Tab.Screen options={{
                        headerShown: false,
                    }} name="Home" component={Home2} />
                    <Tab.Screen options={{ headerShown: false }} name="Library" component={Library} />
                    <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
                    <Tab.Screen options={{ headerShown: false }} name="Search" component={Search} />
                    <Tab.Screen options={{ headerShown: false }} name="Shop" component={Shop} />
                </Tab.Navigator>
        );
}

export default App2;