import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './components/home'
import Dashboard from './components/dashboard'
import Store from './components/store'
import Account from './components/account'





class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    );
  }
}

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Dashboard />
      </View>
    );
  }
}
class StoreScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Store />
      </View>
    );
  }
}

class AccountScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Account />
      </View>
    );
  }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = MaterialIcons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home`;
  } else if (routeName === 'Dashboard') {
    iconName = `dashboard`;
  } else if (routeName === 'Store') {
    iconName = `store`;
  } else if (routeName === 'Account') {
    iconName = `account-circle`;
  }
  
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Dashboard: { screen: DashboardScreen },
      Store: { screen: StoreScreen},
      Account: {screen: AccountScreen}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#E91E63',
        inactiveTintColor: 'gray',
      },
    }
  )
);
