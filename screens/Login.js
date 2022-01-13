import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground, Image } from 'react-native'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const navigation = useNavigation()

    // useEffect(() => {
    //     auth.onAuthStateChanged(user => {
    //         if(user) {
    //             navigation.navigate("Home")
    //         }
    //     })
    // })

    const handleSignUp = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return (
        
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
                <ImageBackground source={require('../assets/bgLogin.jpg')}
                         style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
                             <View style={{width: '100%', height:'30%', alignItems:'center'}}>
                             <Image source={require('../assets/trappTransparent.png')}
                             style= {{width: '60%', height:'60%'}}/>
                             </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.inputText}/>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.inputText}
                        secureTextEntry/>
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.loginBtn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.registerBtn}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    inputText:{
        color: '#006c67',
        fontSize: 20,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
        width: '100%',
        borderWidth: 1,
        borderColor: '#f6ae2d',
    },
    btnContainer:{
        justifyContent:'center',
        alignItems: 'center',
        width: '60%',
        marginTop: 40
    },
    loginBtn:{
        backgroundColor: '#006c67',
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
    },
    registerBtn:{
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#006c67',
        width: '100%',
        borderRadius: 5,
        marginTop: 5,
        alignItems: 'center',
        padding: 10,
    },
    btnText:{
        color: '#eeeeee'
    }

    // colors: {
    // black: #121619, 
    // green: #006c67, 
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}
})