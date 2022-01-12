import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

export default function Home( {navigation} ) {
    return (
        <View style={styles.container}>
          <ImageBackground source={require('../assets/bgHome.png')}
                           style={{width:'100%', height:'100%'}}>
                             <View style={styles.body}>
                               <View style={styles.header}>
                                  <Text style={styles.text}>Welcome to TRAPP, the application to keep track of your runs, and also nearby gyms.</Text>
                               </View>
                               <View style={styles.content}>
                                  <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                               </View>
                               <View style={styles.footer}>
                                <Image source={require('../assets/trappTransparent.png')}
                                       style={{width:'100%', height:'100%'}}></Image>
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
      margin: 10,
    },

    body:{
      
      alignItems:'center',
      flex:1,
    },

    header:{
      backgroundColor:'#eeeeee',
      width:'90%',
      height:'30%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#f6ae2d',
      marginTop:20,
      borderRadius: 5,
      opacity: 0.8,
    },

    content:{
      backgroundColor:'#eeeeee',
      width:'90%',
      height:'40%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#f6ae2d',
      marginTop:20,
      borderRadius: 5,
      opacity: 0.8,
    },

    footer:{
      width:'80%',
      height:'20%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20,
      borderRadius: 5,
    },

    menuBtn:{
      color: '#006c67',
      borderRadius:2,
      borderColor: '#ffb800',
      borderWidth: 1,
    },
    // colors: {
    // black: #121619, 
    // green: #006c67, (light)
    // green: #015c58, (dark) 
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}
})