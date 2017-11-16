import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';

export default class FirstTab extends Component {
    // static navigationOptions = ({navigation}) => {
    //     const {state} = navigation;
    //     return {
    //         title: `welcome ${state.params.title}`
    //     }
    // }
    render(){
        const { navigate,state } = this.props.navigation;
        return(
            <View>
                <Text>first tab page! {state.params&&state.params.name ? state.params.name : ''}</Text>
                <Button
                    title="change manager LiLei"
                    onPress={() => navigate('FirstStack', {username: 'LiLei'})}
                 />
            </View>
        )
    }
};
