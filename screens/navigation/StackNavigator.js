import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Gym from '../Gym';
import Run from '../Run';
import TestTracker from '../TestTracker';
import Login from '../Login';
import Image from 'react-native';

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
            name="HomeStack" component={Home} 
            // options={{
            //     headerTitle:() => (
            //         <Image style={{width: 100, height: 50}} source={require('../../assets/trappHome.png')}></Image>
            //     )
            // }}
            />
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
            name="GymStack" component={Gym}
            // options={{
            //     headerTitle:() => (
            //         <Image style={{width: 80, height: 40}} source={require('../../assets/trappGym.png')}></Image>
            //     )
            // }}
            />
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
            name="RunStack" component={Run}
            // options={{
            //     headerTitle:() => (
            //         <Image style={{width: 80, height: 40}} source={require('../../assets/trappRun.png')}></Image>
            //     )
            // }}
            />
        </Stack.Navigator>
    )
}

// const TestTrackerNavigator = () => {
//     return(
//         <Stack.Navigator 
//         screenOptions={{
//             headerStyle: {
//                 backgroundColor:'#f6ae2d',
//             },
//             headerTitleStyle:{
//                 color: '#006c67',
//                 fontSize: 30,
//             },
//         }}
//         >
//             <Stack.Screen name="TestTrackerStack" component= {TestTracker}/>
//         </Stack.Navigator>
//     )
// }

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