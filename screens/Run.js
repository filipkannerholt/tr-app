import React  from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import GMap from '../components/GMap';
import RunTimer from '../components/RunTimer';

export default function Run( {navigation} ) {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/bgRun.png')}
                       style={{width:'100%', height:'100%'}}>
                         <View style={styles.body}>
                          <RunTimer/>
                         <View style={styles.mapContainer}>
                          <GMap />
                         </View>
                         </View>
                       </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text:{
      color: '#006c67',
    },

    bgOpacity:{
      backgroundColor: '#eeeeee',
      opacity:0.75,
      width:'100%',
      height:'100%',
    },

    body:{
      alignItems:'center',
      flex:1
    },

    timerContainer:{
      width:'90%',
      height:'40%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    timerBtn:{
      backgroundColor:'#006c67',
      opacity: 0.7,
      width: '100%',
      height: '30%',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      elevation: 1.5,
      shadowOffset: {height: 1.5, width: 1.5},
      shadowColor: '#000',
      borderWidth: 1,
      borderColor: '#006c67',
    },

    btnText:{
      color: '#eeeeee',
      fontSize: 30,
      margin: 10,
      fontFamily: 'sans-serif',
    },

    timerClock:{
      backgroundColor: '#eeeeee',
      opacity: 0.7,
      width: '100%',
      height: '40%',
      margin:10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#f6ae2d'
    },

    timerTime:{
      color: '#006c67',
      fontSize: 40,
    },

    mapContainer: {
      width: '100%',
      height: 750,
      margin: 10,
      borderWidth:1,
      borderColor: '#f6ae2d',
    }

    // colors: {
    // black: #121619, 
    // green: #006c67, 
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}
})