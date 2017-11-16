import { DrawerNavigator } from 'react-navigation';
import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';
import FirstDrawerScreen from './components/FirstDrawerPage';
import StackRouter from './StackRouter';

const DrawerRouter = DrawerNavigator({
    FirstDrawer: {
        screen: FirstDrawerScreen
    },
    SecondDrawer: {
        screen: StackRouter
    }
})

export default DrawerRouter;
