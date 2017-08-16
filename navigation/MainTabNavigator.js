import React from 'react';
import { Platform } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RadioScreen from '../screens/RadioScreen';
import SearchScreen from '../screens/SearchScreen';

export default TabNavigator(
  {
    Library: {
      screen: HomeScreen,
    },
    ForYou: {
      screen: LinksScreen,
    },
    Browse: {
      screen: SettingsScreen,
    },
    Radio: {
      screen: RadioScreen,
    },
    Search: {
      screen: SearchScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Library':
            iconName = Platform.OS === 'ios'
              ? 'ios-folder-open'
              : 'ios-folder-open';
            break;
          case 'ForYou':
            iconName = Platform.OS === 'ios'
              ? 'ios-heart'
              : 'md-heart';
            break;
          case 'Browse':
            iconName = Platform.OS === 'ios'
              ? 'ios-musical-notes'
              : 'md-options';
              break;
              case 'Radio':
            iconName = Platform.OS === 'ios'
              ? 'ios-radio-outline'
              : 'ios-radio-outline';
              break;
              case 'Search':
            iconName = Platform.OS === 'ios'
              ? 'ios-search'
              : 'md-search';
              break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
          
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
  activeTintColor: '#df0145'
    }
  }
);
