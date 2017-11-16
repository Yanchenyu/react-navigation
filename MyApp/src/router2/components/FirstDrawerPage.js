import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import React, { Component } from 'react';

export default class FirstDrawer extends Component {
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.contains}>
                <Text>first drawer page！</Text>
                <Button
                    title="click me to toggle page"
                    onPress={() => navigate('DrawerToggle')}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    contains: {
        flex: 1,
        marginTop: 100
    }
})
