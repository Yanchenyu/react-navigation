import { StackNavigator } from 'react-navigation';
import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';
import FirstStackScreen from './components/FirstStackPage';
import SecondStackScreen from './components/SecondStackPage';
import TabRouter from './TabRouter';

const StackRouter = StackNavigator({
    FirstStack: {
        screen: FirstStackScreen
    },
    SecondStack: {
        screen: TabRouter
    }
})

export default StackRouter;
