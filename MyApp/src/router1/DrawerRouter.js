import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {
    View,
    Text,
    Button
} from 'react-native';

const FirstDrawerScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Drawer</Text>
        <Button 
            onPress={() => navigation.navigate('DrawerToggle')}
            title="open drawer"
         />
    </View>
);

const SecondDrawerScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Second Drawer</Text>
        <Button 
            onPress={() => navigation.navigate('DrawerToggle')}
            title="open drawer"
         />
    </View>
);

const ThirdDrawerScreen = ({navigation}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Third Drawer</Text>
        <Button 
            onPress={() => navigation.navigate('DrawerToggle')}
            title="open drawer"
         />
    </View>
);

const DrawerRouter = DrawerNavigator({
    FirstDrawer: {
        screen: FirstDrawerScreen,
        navigationOptions: {
            drawerLabel: 'FirstDrawer'
        }
    },
    SecondDrawer: {
        screen: SecondDrawerScreen,
        navigationOptions: {
            drawerLabel: 'SecondDrawer'
        }
    },
    ThirdDrawer: {
        screen: ThirdDrawerScreen,
        navigationOptions: {
            drawerLabel: 'ThirdDrawer'
        }
    },
});

export default DrawerRouter;
