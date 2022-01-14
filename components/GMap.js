import React from 'react';
//import react in our code.

import { View, StyleSheet, Dimensions} from 'react-native';
//import all the components we are going to use.

import * as Location from 'expo-location';

import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';

export default class GMap extends React.Component {
  state = {
    currentLongitude: 0, //Initial Longitude
    currentLatitude: 0, //Initial Latitude
    markers: [],
  };
  componentDidMount = () => {
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition(
      //get the current location
      position => {
        console.log(position);
        const currentLongitude = position.coords.longitude;
        //getting the Longitude from the location
        const currentLatitude = position.coords.latitude;
        //getting the Latitude from the location

        this.setState({ currentLongitude: currentLongitude });
        //Setting state Longitude
        this.setState({ currentLatitude: currentLatitude });
        //etting state Latitude
        
        
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      //get the location on location change
      console.log(position);
      const currentLongitude = position.coords.longitude;
      //getting the Longitude from the location
      const currentLatitude = position.coords.latitude;
      //getting the Latitude from the location

      this.setState({ currentLongitude: currentLongitude });
      console.log(currentLongitude);
      //setting state Longitude
      this.setState({ currentLatitude: currentLatitude });
      console.log(currentLatitude);
      //setting state Latitude

      this.state.markers.push({
        markerLongitude: currentLongitude,
        markerLatitude: currentLatitude,
      })
    });
  };
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };
  render() {
    return (
      <View style={styles.container}>
         <MapView
        //  provider={PROVIDER_GOOGLE}
         style={styles.map}
         loadingEnabled={true}
         initialRegion={{
             latitude: 58.28334,
             longitude: 12.29398,
             latitudeDelta: 0,
             longitudeDelta: 0,
         }}
         >
           {/* {this.state.markers.map((value, index) =>{
          return(
            <MapView.Polyline
            // provider={PROVIDER_GOOGLE}
           coordinates={[
            {latitude: value.markerLatitude},
            {longitude: value.markerLongitude},
           ]}
          strokeColor="#ffb800" 
          strokeColors={['#ffb800']}
          strokeWidth={6}
          key={index}
          />
          )
        })} */}

        {this.state.markers.map((value, index) =>{
          return(
            <Marker
           coordinate={{
             latitude: value.markerLatitude,
             longitude: value.markerLongitude,
          }}
          key={index}
          />
          )
        })}
         </MapView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  map:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth:1,
    borderColor:'#f6ae2d',
  },
});
