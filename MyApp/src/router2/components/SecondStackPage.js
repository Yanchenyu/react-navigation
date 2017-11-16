import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';

export default class SecondStack extends Component {
    render(){
        const { params } = this.props.navigation.state;
        return(
            <View>
                <Text>second stack page!</Text>
                <Text>welcome {params.username}</Text>
            </View>
        )
    }
};
