import React from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
let ScreenHeight = Dimensions.get("window").height;

const SignUp = ({navigation}) => {
    return (
        <View style={style.main}>
            <View style={style.inputView}>
                <View style={style.welcomeTextView}>
                    <Text style={style.welcomeText}>
                        Welcome 2!
                    </Text>
                </View>
                <View style={style.email}>
                    <View style={style.emailView}>
                        <Text style={style.text}>
                            Email
                        </Text>
                    </View>

                    <TextInput placeholderTextColor='#989c9f' placeholder='Enter Your Email' style={style.input} />
                </View>

                <View>
                    <View style={style.emailView}>
                        <Text style={style.text}>
                            Password
                        </Text>
                    </View>
                    <TextInput placeholderTextColor='#989c9f' placeholder='Enter Your Password' style={style.input} />
                </View>
                <View style={style.okkk}>
                    <TouchableOpacity style={style.rememberContainer}>
                        <Text style={style.rememberText}>
                            Remember me
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.forgotPass} >
                        <Text style={style.rememberText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity >
                        <Text style={style.Signin}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    color: 'white',
                    marginTop: 30,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 17
                    }}>
                        - OR -
                    </Text>
                </View>
                <View style={{
                    color: 'white',
                    marginTop: 11,
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16
                    }}>
                        SignUp with
                    </Text>
                </View>
                <View style={style.mainOrSignInSignUp}>
                    <TouchableOpacity >
                        <View style={style.Facebook}>
                            <View style={style.imageFacebook
                            }>
                                <Image source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/foodappreact-a4c53.appspot.com/o/facebookwhite%2Ffacebookwhite.png?alt=media&token=88d75192-381e-4763-a641-0e48729895d1',
                                    width: 25,
                                    height: 25,
                                }} />
                            </View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                                Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={style.Google}>
                            <View style={style.imageFacebook
                            }>
                                <Image source={{
                                    uri: 'https://firebasestorage.googleapis.com/v0/b/foodappreact-a4c53.appspot.com/o/facebookwhite%2Fgooglewhite.png?alt=media&token=34acad1f-7be5-4b24-bd30-78c9397228f4',
                                    width: 25,
                                    height: 25,
                                }} />
                            </View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Signin')
                }} style={style.redirect}>
                    <Text style={{ color: 'white', fontSize: 17 }}>
                        Already Have an Account? <Text style={{ fontWeight: 'bold' }}>Sign In </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    imageFacebook: {
        marginRight: 10,
    },
    redirect: {
        marginTop: 30,
        color: 'white',
    },
    Google: {
        marginLeft: 10,
        position: 'relative',
        top: 15,
        backgroundColor: '#1e272e',
        width: 150,
        borderRadius: 18,
        height: 50,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    Facebook: {
        position: 'relative',
        top: 15,
        backgroundColor: '#1e272e',
        width: 150,
        borderRadius: 18,
        height: 50,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    mainOrSignInSignUp: {
        flexDirection: 'row'
    },

    Signin: {
        color: 'white',
        backgroundColor: '#f16c23',
        width: 300,
        borderRadius: 18,
        paddingTop: 10,
        height: 40,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPass: {
        paddingLeft: 20
    },
    okkk: {
        marginTop: 7,
        flexDirection: 'row',
    },
    rememberContainer: {
        marginRight: 50
    },
    rememberText: {
        color: 'white',
        padding: 5
    },
    main: {
        backgroundColor: '#373f45',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: ScreenHeight,
        marginTop:23,
    },
    welcomeTextView: {
        paddingBottom: 20
    },
    welcomeText: {
        fontSize: 27,
        color: 'white',
    },
    email: {
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginVertical: 4,
    },
    emailView: {

    },
    input: {
        backgroundColor: '#50575c',
        width: 310,
        borderRadius: 10,
        paddingHorizontal:13,
        paddingVertical:7,
        color: 'white',
    },
    inputView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})
export default SignUp
