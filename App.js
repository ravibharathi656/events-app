import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SideBar from './Components/SideBar';
import DashBord from './Components/DashBord';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" style={styles.LoginContainor} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SideBar" style={styles.LoginContainor} component={SideBar} options={{ headerShown: false }}/>
        <Stack.Screen name="DashBord" style={styles.LoginContainor} component={DashBord} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  LoginContainor:{
    backgroundColor:'#2e5bcd',
    height:'100%',
    alignItems:'center',
    width:'100%'
  }
});
