import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Map from '../components/Map';

export default function Gym( {navigation} ) {
  return (
      <View style = {styles.container}>
        <ImageBackground source={require('../assets/bgRun.png')}
                         style={{width:'100%', height:'100%'}}>
                           <View style = {styles.contentContainer}>
                           <Image source={require('../assets/trappGymTransparent.png')} style={{width: 100, height:50}}></Image>
                            <View style = {styles.textContainer}>
                              <Text style = {styles.text}>This page is meant to be showing nearby gyms. Scroll through the map below to see where the gyms are located.</Text>
                            </View>
                           </View>
        <View style= {styles.mapContainer}>
          <Map />
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

    text: {
        color: '#006c67',
        margin: 10,
        fontSize: 25,
    },

    contentContainer:{
      width:'100%',
      height:'30%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80,
    },

    textContainer:{
      width: '95%',
      height: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    mapContainer: {
      width: '100%',
      height: '50%',
      borderWidth: 1,
      borderColor: '#f6ae2d',
      marginTop: 90
    },

    // colors:{
    // black: #121619, 
    // green: #006c67, (light)
    // green: #015c58, (dark)  
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}
})