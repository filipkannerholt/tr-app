import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Gym from '../Gym';
import Run from '../Run';
import Login from '../Login';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor:'#f6ae2d',
            },
            headerTitleStyle:{
                color: '#006c67',
                fontSize: 30,
            },
        }}
        >
            <Stack.Screen 
            options= {{headerShown: false}}
            name="HomeStack" component={Home} />
        </Stack.Navigator>
    )
}

const GymStackNavigator = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor:'#f6ae2d',
            },
            headerTitleStyle:{
                color: '#006c67',
                fontSize: 30,
            },
            
        }}
        >
            <Stack.Screen 
            options= {{headerShown: false}}
            name="GymStack" component={Gym}/>
        </Stack.Navigator>
    )
}

const RunStackNavigator = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor:'#f6ae2d',
            },
            headerTitleStyle:{
                color: '#006c67',
                fontSize: 30,
            },
        }}
        >
            <Stack.Screen 
            options= {{headerShown: false}}
            name="RunStack" component={Run}/>
        </Stack.Navigator>
    )
}

const LoginStackNavigator = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown:false,
            headerStyle: {
                backgroundColor: '#f6ae2d',
            },
            headerTitleStyle:{
                color:'#006c67',
                fontSize: 30,
            },
        }}
        >
            <Stack.Screen
            screenOptions={{headerShown: false}}
            options= {{headerShown: false}} name="LoginStack" component= {Login}/>
        </Stack.Navigator>
    )
}

export {HomeStackNavigator, GymStackNavigator, RunStackNavigator, LoginStackNavigator}

    // colors: {
    // black: #121619, 
    // green: #006c67, 
    // white: #eeeeee, 
    // mustard (light): #ffb800, 
    // mustard (dark): #f6ae2d,
    //}