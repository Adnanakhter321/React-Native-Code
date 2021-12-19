import { Text, View, Image, TouchableOpacity } from 'react-native';
import { auth, signInWithEmailAndPassword } from "../configs/Firebase";

import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
export default function Home({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Signin, setSignin] = useState("SignIn");
    const SignIn = async () => {
        if(email !== "adminpanel@gmail.com"){
            if (email && password) {
                setSignin('SignIn.....')
                try {
                    await signInWithEmailAndPassword(auth, email, password)
                    setSignin('SignIn')
                    navigation.navigate('Khana Sab Ke Lye');
                } catch (e) {
                    setSignin('SignIn')
                    console.error(e)
                }
            }
            else {
                setSignin('SignIn')
                console.error('Fill all fields and try again')
            }
        }
        else{
            alert('User Not Exist or Wrong Email and password')
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginVertical: 20 }}>
                <Image source={require('../images/LogoKhanaSabkliye-01.png')} style={{ width: 280, height: 159 }} />
                <Text style={{ fontSize: 35, textAlign: 'center', color: '#00008B' }}>
                    SignIn
                </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <TextInput
                    label="Email"
                    value={email}
                    style={{ width: 300 }}
                    onChangeText={text => setEmail(text)}
                />
            </View>
            <View>
                <TextInput
                    label="Password"
                    value={password}
                    style={{ width: 300 }}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            <Button style={{ marginVertical: 20 }} mode="contained" onPress={SignIn}>
            {Signin}
            </Button>
            <TouchableOpacity style={{ marginVertical: 11 }}>
                <Text style={{ fontSize: 14 }}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{ fontSize: 17 }}>
                    Dont Have An Account? SignUp
                </Text>
            </TouchableOpacity>
        </View>
    );
}
