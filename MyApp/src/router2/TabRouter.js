import { TabNavigator } from 'react-navigation';
import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';
import FirstTabScreen from './components/FirstTabPage';
import SecondTabScreen from './components/SecondTabPage';

const TabRouter = TabNavigator({
    FirstTab: {
        screen: FirstTabScreen
    },
    SecondTab: {
        screen: SecondTabScreen
    }
})

export default TabRouter;
