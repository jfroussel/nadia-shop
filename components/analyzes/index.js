import React, { Component } from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-elements'

class Analyses extends Component {
    render() {
        return (
            <View style={{ paddingTop: 20 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#E91E63',
                    height: 80,
                    padding: 20,
                }}>
                    <Text h3 style={{ color: '#fff' }}>Analyses page</Text>
                </View>
            </View>
        );
    }
}

export default Analyses;
