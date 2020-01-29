import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
//import HomeScreen  from "./screens/HomeScreen";
import {HomeScreen,LoginScreen,SettingScreen} from "./screens"

const TabNavigator = createBottomTabNavigator({
    Home: {    screen: HomeScreen,  },
    Setting: {    screen: SettingScreen,  },
  });

const DrawerNavigator = createDrawerNavigator({
    Home: {    screen: HomeScreen,  },
    Setting: {    screen: SettingScreen,  },
    Outros: {    screen: TabNavigator,  },
    
  },{
    
    initialRouteName: 'Home',
    drawerPosition:'right',
   
  });



  
const stackNavigator = createStackNavigator({
  Home: {    screen: DrawerNavigator,  
        navigationOptions : {
            header:null,
        title: 'Home',
        
        headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#000"
            />
          ),
      }
    },
  Login: {    screen: LoginScreen,
    navigationOptions : {
        header:null}
},
  
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0a708c',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);
const Tabs =  createBottomTabNavigator({ stackNavigator });
export default createAppContainer(stackNavigator);