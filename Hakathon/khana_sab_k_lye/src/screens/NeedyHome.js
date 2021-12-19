import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Map from './Map';
import Needy from "./Needy"
const Tab = createBottomTabNavigator();
export default function NeedyHome({ navigation }) {
    return (
       <>
           <Tab.Navigator initialRouteName='Food'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Food Banks') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Food') {
                            iconName = focused ? 'ios-list' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Food Banks" component={Map} options={{
                    headerShown:false
                }}/>
                <Tab.Screen name="Food" component={Needy} options={{
                }}/>
            </Tab.Navigator>
       </>
    );
}
