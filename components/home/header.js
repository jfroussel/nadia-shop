import React, { Component } from 'react';
import { Header } from 'react-native-elements'


class HomeHeader extends Component {
    render() {
        
        return (
            <Header
                centerComponent={{ text: 'NADIA SHOP', style: { color: '#fff' } }}
                backgroundColor='#E91E63'
               
            />
        );
    }
}

export default HomeHeader;
