import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import HomeHeader from './header'

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <HomeHeader />
                <ImageBackground
                    resizeMode={'cover'} // or cover
                    style={{ flex: 1 }}
                    source={require('../../assets/background.jpg')}
                />
            </View>
        );
    }
}


export default Home

