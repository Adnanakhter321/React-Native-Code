import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home'
import Settings from '../screens/settings'
import Food from '../screens/food'
import ContactList from '../screens/contactlist'
import CameraComponent from '../screens/cameracomponent'
import Signup from '../screens/signup'



const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Signup">
                <Drawer.Screen name="Home" component={Home}
                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Signup" component={Signup} />
                <Drawer.Screen name="Food" component={Food} />

                <Drawer.Screen name="Contact List" component={ContactList} />
                <Drawer.Screen name="CameraComponent" component={CameraComponent} />

            </Drawer.Navigator>

            {/* {
                true ?
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Home') {
                                    iconName = focused
                                        ? 'ios-information-circle'
                                        : 'ios-information-circle-outline';
                                } else if (route.name === 'Settings') {
                                    iconName = focused ? 'ios-list-box' : 'ios-list';
                                }
                                else if (route.name === 'Food') {
                                    iconName = focused ? 'fast-food-sharp' : 'fast-food-outline';
                                }

                                // You can return any component that you like here!
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: 'black',
                            tabBarInactiveTintColor: 'gray',
                        })}
                    >
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Food" component={Food} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />

                    </Tab.Navigator>
                    :
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>

            } */}

        </NavigationContainer>
    );
}