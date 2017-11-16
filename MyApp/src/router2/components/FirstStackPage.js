import {
    View,
    Text,
    Button
} from 'react-native';
import React, { Component } from 'react';

export default class FirstStack extends Component {
    static navigationOptions = ({navigation}) => {
        const { setParams, state } = navigation;
        return {
            title: `This is ${state.params && state.params.name ? state.params.name : ''}`,
            headerRight: (
                <Button
                    title="next"
                    onPress={() => {
                        setParams({name: 'First Tab'}); // setParams我理解的是修改当前页面的navigation.state.params，如果要跨页面，那就直接在navigate方法后面添加第二个参数对象
                        // navigation.navigate('FirstTab')
                    }}
                />
            )
        }
    }
    // navigationOptions也可以在StackNavigator里面写，就是和screen属性并列的下一个属性
    render(){
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return(
            <View>
                <Text>first stack page！</Text>
                <Text>Hi, {params && params.username ? params.username : 'Yan'}</Text>
                <Button
                    title="jump to second stack page"
                    onPress={() => navigate('SecondTab', {username: 'Yan'})}
                />
                <Button
                    title="back to toggle page"
                    onPress={() => navigate('DrawerToggle')}
                />
                {/* 这里要注意navigate这个方法第一个参数 */}
            </View>
        )
    }
};
