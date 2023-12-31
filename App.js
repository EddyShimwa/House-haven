import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import NotificationsScreen from './src/Screens/NotificationsScreen';
import AboutScreen from './src/Screens/AboutScreen';
import Favorites from './src/Screens/FavoritesScreen';
import HouseDetailsScreen from './src/Screens/HouseDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="HouseDetails"
        component={HouseDetailsScreen}
        options={{
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="App"
          component={() => (
            <Tab.Navigator initialRouteName="Home">
              <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={size} color={color} />
                  ),
                  tabBarStyle: {
                    backgroundColor: '#2f2f2f',
                    borderRadius: 12,
                    height: 60,
                    padding: 10,
                    margin: 20,
                  },
                  tabBarLabel: '',
                  tabBarActiveTintColor: '#fff',
                  headerShown: false,
                }}
              />
                     <Tab.Screen
          name=" "
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: "#2f2f2f",
              borderRadius: 12,
              height: 60,
              padding: 10,
              margin: 20,
            },

            tabBarLabel: "",
            tabBarActiveTintColor: "#fff",
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: "#2f2f2f",
              borderRadius: 12,
              height: 60,
              padding: 10,
              margin: 20,
            },
            tabBarBadge: 2,
            tabBarBadgeStyle: {color: 'white', width: 10, height: 15, backgroundColor: 'green', borderRadius: 50, alignItems: 'center', justifyContent: 'center'},
            
            tabBarLabel: "",
            tabBarActiveTintColor: "#fff",
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="info" size={size} color={color} />
            ),
            tabBarStyle: {
              backgroundColor: "#2f2f2f",
              borderRadius: 12,
              height: 60,
              padding: 10,
              margin: 20,
            },
            tabBarLabel: "",
            tabBarActiveTintColor: "#fff",
            headerShown: false,
            
          }}
        />
            </Tab.Navigator>
          )}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
