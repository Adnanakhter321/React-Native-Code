import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { signOut, auth } from "../configs/Firebase"
const NeedyPen = ({ navigation }) => {
    return (
        <>
           <View style={{justifyContent:'center', alignItems:'center'}}>
           <Button  style={{width:100}}mode='contained' onPress={() => {
                signOut(auth).then(() => {
                    navigation.navigate('Signin')
                })
            }}>Logout</Button>
           </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
                <Text>
                    Submit your Food Request If Already Submitted Wait a while if your Request got Accepted then we will Show you a Card
                </Text>
            </View></>
    )
}

export default NeedyPen;
