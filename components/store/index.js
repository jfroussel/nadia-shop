import React, { Component } from 'react';
import { View, ScrollView } from 'react-native'
import { List, ListItem, Text } from 'react-native-elements'
const storeCategories = [
    {
        id: 1,
        name: "Articles",
        subtitle: "vetements, parfums, makup ....",
        icon: 'shopping-basket'
    },
    {
        id: 2,
        name: "Marques",
        subtitle: "chanel, vuitton, rolex ....",
        icon: 'branding-watermark'
    },
    {
        id: 3,
        name: "Ventes",
        subtitle: " ventes en cours et stock",
        icon: 'euro-symbol'
    },
    {
        id: 4,
        name: "Analyses",
        subtitle: "analyses des ventes",
        icon: 'graphic-eq'
    }
]

class Store extends Component {
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
                    <Text h3 style={{ color: '#fff' }}>Store page</Text>
                </View>
                <ScrollView>
                    <List containerStyle={{ marginBottom: 20, marginTop: 0 }}>
                        {
                            storeCategories.map((l) => (
                                <ListItem
                                    name={l.name}
                                    subtitle={l.subtitle}
                                    leftIcon={{ name: l.icon }}
                                    key={l.id}
                                    title={l.name}

                                />
                            ))
                        }
                    </List>
                </ScrollView>

            </View>
        );
    }
}

export default Store;
