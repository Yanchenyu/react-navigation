import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';

export default class SecondTab extends Component {
    render(){
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>second tab page!</Text>
                <Text>welcome {params && params.username ? params.username : ''}</Text>
                <Button
                    title="change manager Lucy"
                    onPress={() => navigate('FirstStack', {username: 'Lucy'})}
                 />
            </View>
        )
    }
};
