import React,{ Component } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
// import Router from './router1/TabRouter';
import Router from './router2/DrawerRouter'

export default class App extends Component {
  render(){
    return(
      <Router />
    )
  }
}
