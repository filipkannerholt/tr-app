import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, GymStackNavigator, RunStackNavigator, LoginStackNavigator } from './StackNavigator';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const LoginTab = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen 
            options={{
                tabBarStyle:{
                    display: 'none'
                }
            }}
            name="Login" component={LoginStackNavigator}/>
            </Tab.Navigator>
    )
}

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#f6ae2d',
                    headerShown: false
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

        </Tab.Navigator>


    )
}

export {BottomTabNavigator, LoginTab};