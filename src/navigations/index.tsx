import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import UnitPriceScreen from '../screens/UnitPriceScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2929FF',
  }
};

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
            tabBarLabel: 'HOME'
          }}
        />
        <Tab.Screen 
          name="UnitPrice" 
          component={UnitPriceScreen}
          options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="calculator" color={color} size={size} />,
            tabBarLabel: 'COMPARE UNIT PRICE'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;