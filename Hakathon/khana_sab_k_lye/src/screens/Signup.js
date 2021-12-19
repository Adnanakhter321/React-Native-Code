import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { auth, createUserWithEmailAndPassword, setDoc, doc, db } from "../configs/Firebase";


export default function Home({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const SignUp = async () => {
    if (email && password&& username) {
      try {
        let { user } = await createUserWithEmailAndPassword(auth, email, password)
        let userRef = doc(db, 'Users', user.uid)
        await setDoc(userRef, {
          username,
          email,
          password,
          userRole: 'needy',
          uid: user.uid
        })
        navigation.navigate('Khana Sab Ke Lye');
      } catch (e) {
        console.error(e)
      }
    }
    else{
      console.error('Fill all fields and try again')
    }

  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginVertical: 20 }}>
        <Image source={require('../images/LogoKhanaSabkliye-01.png')} style={{ width: 280, height: 159 }} />
        <Text style={{ fontSize: 35, textAlign: 'center', color: '#00008B' }}>
          SignUp
        </Text>
      </View>
      <View>
        <TextInput
          label="Usename"
          value={username}
          style={{ width: 300 }}
          onChangeText={text => setUsername(text)}
        />
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
      <Button style={{ marginVertical: 20 }} mode="contained" onPress={SignUp}>
        SignUp
      </Button>

      <TouchableOpacity style={{ alignItems: 'flex-start' }} onPress={() => navigation.navigate('Signin')}>
        <Text style={{ fontSize: 17 }}>
          Already Have an Account? SignIn
        </Text>
      </TouchableOpacity>
    </View>
  );
}
