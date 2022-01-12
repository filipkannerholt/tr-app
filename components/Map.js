import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, {Marker, AnimatedRegion, Polyline, PROVIDER_GOOGLE }  from 'react-native-maps'

const Map = () => {
    return(
        <MapView
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        region={{
            latitude: 58.032580,
            longitude: 12.153280,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        >
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    map:{
        height: '100%',
        width:'100%',
    }
    // colors: {
    // black: #121619, 
    // green: #006c67, (light)
    // green: #015c58, (dark) 
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}
})