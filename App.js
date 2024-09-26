import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'

// Icons
import { Ionicons } from '@expo/vector-icons'

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';



// Drawer Navigation
const Drawer = createDrawerNavigator();

// App Component
export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#67E6DC' },
          headerTintColor: '#C13D25',
          drawerActiveBackgroundColor: '#D1988E',
          drawerActiveTintColor: 'white'

        }}>
          <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
          }} />
          <Drawer.Screen name='User' component={UserScreen} options={{
            drawerLabel: 'User',
            drawerIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />


          }} />
        </Drawer.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
