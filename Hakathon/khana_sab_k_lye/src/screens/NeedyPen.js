import React,{useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { signOut, auth, onAuthStateChanged } from "../configs/Firebase"
const NeedyPen = ({ navigation }) => {
    const [Food, setFood] = useState('')
    let AcceptFood = useSelector((st)=> st.todoReducer.AcceptedFood)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              AcceptFood.map((el)=>{
                    if(el.useruid === user.uid){
                        setFood(el)
                    }
              })
            }
          });
          console.log(Food , 'yeeeeeee');
    }, [AcceptFood])
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
