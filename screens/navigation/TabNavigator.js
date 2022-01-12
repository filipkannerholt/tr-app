import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, GymStackNavigator, RunStackNavigator, TestTrackerNavigator } from './StackNavigator';
import { StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#f6ae2d',
                     
                },
                tabBarActiveTintColor: '#eeeeee',
                headerShown: false}}>
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{
                tabBarIcon:({ tintColor })=>(
                    <Ionicons name="home" color={'#006c67'} size={20}/>
                )
            }}/>
            <Tab.Screen name="Gym" component={GymStackNavigator} options={{
                tabBarIcon:({ tintColor })=>(
                    <FontAwesome name="map-marker" color={'#006c67'} size={20}/>
                )
            }}/>
            
            <Tab.Screen name="Run" component={RunStackNavigator} options={{
                tabBarIcon:({ tintColor })=>(
                    <FontAwesome5 name="running" color={'#006c67'} size={20}/>
                )
            }}/>

            <Tab.Screen name="TestTracker" component={TestTrackerNavigator} options={{
                tabBarIcon:({ tintColor })=>(
                    <FontAwesome5 name="running" color={'#006c67'} size={20}/>
                )
            }}/>

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    // colors: {
    // black: #121619, 
    // green: #006c67, 
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}
})

export default BottomTabNavigator;