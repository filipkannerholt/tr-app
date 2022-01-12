import React  from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import GMap from '../components/GMap';

export default function Run( {navigation} ) {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/bgRun.png')}
                       style={{width:'100%', height:'100%'}}>
                            <GMap />                         
                       </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})