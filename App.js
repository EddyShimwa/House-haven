import * as React from 'react'; 
import { Text, View } from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


const Tab = createBottomTabNavigator();



function HomeScreen() { 
  return ( 
    <View style={{ flex: 1, alignItems: 'center',  
                   justifyContent: 'center' }}> 
        <Text>Home pages</Text> 
    </View> 
  ); 
} 
  
function NotificationsScreen() { 
  return ( 
    <View style={{ flex: 1, alignItems: 'center',  
                   justifyContent: 'center' }}> 
      <Text>Notifications Page</Text> 
    </View> 
  ); 
} 
  
function AboutScreen() { 
  return ( 
    <View style={{ flex: 1, alignItems: 'center',  
                   justifyContent: 'center' }}> 
      <Text>About Page</Text> 
    </View> 
  ); 
} 



function Favorites() { 
  return ( 
    <View style={{ flex: 1, alignItems: 'center',  
                   justifyContent: 'center' }}> 
      <Text>Favorites Page</Text> 
    </View> 
  ); 
} 
// const Drawer = createDrawerNavigator(); 


const App = () => {
  return (
    <NavigationContainer> 
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }
          
        }
        />

        <Tab.Screen
          name="Favz"
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="bell" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="info" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;