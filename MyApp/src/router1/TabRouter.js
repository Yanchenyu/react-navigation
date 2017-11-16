import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.14
import DrawerRouter from './DrawerRouter';

const FirstScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>First Screen</Text>
    <DrawerRouter />
  </View>
);

const SecondScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Second Screen</Text>
    <DrawerRouter />
  </View>
);

const ThirdScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Third Screen</Text>
      <DrawerRouter />
    </View>
);

const RootTabs = TabNavigator({
  First: {
    screen: DrawerRouter,
    navigationOptions: {
      tabBarLabel: 'First',
    },
  },
  Second: {
    screen: DrawerRouter,
    navigationOptions: {
      tabBarLabel: 'Second',
    },
  },
  Third: {
    screen: DrawerRouter,
    navigationOptions: {
      tabBarLabel: 'Third',
    },
  }
});

export default RootTabs;