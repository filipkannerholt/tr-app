import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator, LoginTab } from './screens/navigation/TabNavigator';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKIfmMocSlVZvKmLRCNl75T6Yolkr9cqA",
  authDomain: "trappauth.firebaseapp.com",
  projectId: "trappauth",
  storageBucket: "trappauth.appspot.com",
  messagingSenderId: "1024174025536",
  appId: "1:1024174025536:web:435784af5a6302c86268a5"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

function App() {
  const [load, setLoad] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    firebase.auth()
    .onAuthStateChanged((user)=> {
      if(!user){
        setIsLoggedIn(false);
        setLoad(true);
      }
      else{
        setIsLoggedIn(true);
        setLoad(true);
      }
    })
  })

  if(!load){
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  if(!isLoggedIn){
    return(
      <NavigationContainer>
        <LoginTab/>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
