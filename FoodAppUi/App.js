import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, OrderDelivery, Restaurant  } from './src/screens';
import MyTabs from './navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator 
    //       initialRouteName='Home'
    //     >
    //       <Stack.Screen name='MyTabs' component={MyTabs} />
    //       <Stack.Screen name='Restaurant' component={Restaurant} />
    //       <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
    //     </Stack.Navigator>
    // </NavigationContainer>
   <NavigationContainer>
     <MyTabs />
   </NavigationContainer>
    )
}
export default App;